import {UserStore} from "@/widgets/blocks/shared/state-managers";
import axios from "axios";

class UserController
{


    async login(login: string, password: string)
    {
        axios.post("http://localhost:5000/api/users/login",{
            login:login,
            password:password
        }).then(result => {

        }).catch(error => {

        })
    }

    async register(first_name: string, last_name: string, email: string, password: string)
    {
        axios.post("http://localhost:5000/api/users/register",{
            first_name:first_name,
            last_name:last_name,
            email:email,
            password:password
        }).then(result => {

        }).catch(error => {

        })
    }

    logout()
    {
        UserStore.setUser(undefined)
    }
}

export const userController = new UserController();