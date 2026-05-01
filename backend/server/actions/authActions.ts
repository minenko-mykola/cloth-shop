import {User} from "../../entities/database/additional";
import {Op} from "sequelize";
import bcrypt from "bcrypt";
import {UserRoles} from "../../entities/database/types/enum/additional";
import express from "express";

const rounds = Number(process.env.HASH_ROUNDS) || 12;

class AuthActions
{
    async register(req: express.Request, res: express.Response)
    {
        const { login, password,first_name,last_name } = req.body;

        const existingUsers = await User.findAll({ where: {
                [Op.or] : [
                    { email : login },
                    {
                        [Op.and] : [
                            { first_name : first_name },
                            { last_name : last_name }
                        ]
                    }
                ]
            } });

        if (existingUsers.length > 0) {

            const emailMatch = existingUsers.some(user => user.email === login);
            if (emailMatch) {
                return res.status(409).send({ message: "User with this email already exists." });
            }

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
    }

    async login(req: express.Request, res: express.Response)
    {
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
    }

    async getById(req: express.Request, res: express.Response)
    {
        const id = req.params.id;
        const user = await User.findOne({ where: { id: id } });

        if (!user) {
            return res.status(404).send({ message: "User was not found." });
        }else{
            return res.status(200).send({ message: "User found successfully",user : user });
        }
    }

    async logout(req: express.Request, res: express.Response)
    {

    }
}

export const authActions = new AuthActions();