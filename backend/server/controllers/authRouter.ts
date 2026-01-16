import express from 'express';
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import {User} from "../../entities/database/additional";
import {UserRoles} from "../../entities/database/types/enum/additional";
import {Op} from "sequelize";

dotenv.config({ path: "config/envs/.env.hashing", override: false });

export const authRouter = express.Router();

const rounds = Number(process.env.HASH_ROUNDS) || 12;

authRouter.post('/register',
    async (req, res) => {
        const { login, password,first_name,last_name } = req.body;

        const existingUsers = await User.findAll({ where: {
                [Op.or] : [
                    { email : login }, // Перевіряємо, чи існує такий email
                    { // Перевіряємо, чи існує КОРИСТУВАЧ З ТИМ САМИМ ІМ'ЯМ ТА ПРІЗВИЩЕМ
                        [Op.and] : [
                            { first_name : first_name },
                            { last_name : last_name }
                        ]
                    }
                ]
            } });

        if (existingUsers.length > 0) {
            // Якщо знайшли хоча б один збіг (по email АБО по full name)

            // Якщо збіг по email
            const emailMatch = existingUsers.some(user => user.email === login);
            if (emailMatch) {
                return res.status(409).send({ message: "User with this email already exists." });
            }

            // Якщо збіг по імені та прізвищу
            return res.status(409).send({ message: "User with this first and last name already exists." });
        }

        try {
            const hashedPassword = await bcrypt.hash(password, rounds);
            const newUserCount = await User.count()

            const newUser = await User.create({
                avatar: undefined,
                id: newUserCount + 1,
                email: login,
                password: hashedPassword,
                first_name: first_name,
                last_name: last_name,
                role: UserRoles.User
            })

            return res.status(201).send({ message: "User created successfully!", user_id: newUser.id });

        } catch (error) {
            console.error("Registration error:", error);
            return res.status(500).send({ message: "An error occurred during registration." });
        }
    });

authRouter.post('/login',
    async (req, res) => {
        const { login, password } = req.body;

        const user = await User.findOne({ where: { email: login } });

        if (!user) {
            return res.status(401).send({ message: "Invalid credentials." });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).send({ message: "Invalid credentials." });
        }

        return res.status(201).send({ message: "Login successful!", user_id: user.id });
    });

authRouter.get('/get/:id', async (req, res) =>
{
    const id = req.params.id;
    const user = await User.findOne({ where: { id: id } });

    if (!user) {
        return res.status(404).send({ message: "User was not found." });
    }else{
        return res.status(200).send({ message: "User found successfully",user : user });
    }

})


authRouter.post("/logout", async (req, res) => {

})