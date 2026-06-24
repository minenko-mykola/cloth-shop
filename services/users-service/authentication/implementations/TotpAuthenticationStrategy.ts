import {IAuthenticationStrategy} from "../interfaces";
import {Heads, Volunteers} from "../../entities/sequelize";

type T = Heads | Volunteers;
class TotpAuthenticationStrategy implements IAuthenticationStrategy<T>
{
    check(id: string): Promise<boolean> {
        return Promise.resolve(true);
    }

    login(login: string, password: string): Promise<string> {
        return Promise.resolve("");
    }

    register(data: T): Promise<string> {
        return Promise.resolve("");
    }
}

export const totpAuthenticationStrategy = new TotpAuthenticationStrategy();