
export interface UserRegisterFormType
{
    first_name: string;
    last_name: string;
    login: string;
    avatar : File | null;
    password : string;
}