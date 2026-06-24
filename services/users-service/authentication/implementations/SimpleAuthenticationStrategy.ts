import {IAuthenticationStrategy} from "../interfaces";
import {Users} from "../../entities/sequelize";

class SimpleAuthenticationStrategy implements IAuthenticationStrategy<Users>
{
    check(id: string): Promise<boolean> {
        return Promise.resolve(true);
    }

    login(login: string, password: string): Promise<string> {
        return Promise.resolve("");
    }

    register(data: Users): Promise<string> {
        return Promise.resolve("");
    }
}

export const simpleAuthenticationStrategy = new SimpleAuthenticationStrategy();