import {IAuthenticationStrategy} from "../interfaces";
import {Heads, Users, Volunteers} from "../../entities/sequelize";
import {simpleAuthenticationStrategy} from "../implementations";

type T = Users | ( Volunteers | Heads )
class AuthenticationStrategyContext
{
    private _strategy : IAuthenticationStrategy<T> = simpleAuthenticationStrategy;

    setStrategy(strategy : IAuthenticationStrategy<T>)
    {
        this._strategy = strategy;
    }

    get strategy()
    {
        return this._strategy;
    }
}

export const authenticationStrategyContext = new AuthenticationStrategyContext();