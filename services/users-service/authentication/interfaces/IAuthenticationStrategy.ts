export interface IAuthenticationStrategy<T>
{
    login(login : string,password : string) : Promise<string>
    register(data : T) : Promise<string>
    check(id : string) : Promise<boolean>
}