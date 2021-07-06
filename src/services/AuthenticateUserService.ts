import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";


interface IAuthenticateRequest {
    email: string,
    password: string
}

class AuthenticateUserService {
    async execute({ email, password } : IAuthenticateRequest) {
        const userRepositories = getCustomRepository(UsersRepositories);

        const user = await userRepositories.findOne({email});

        if(!user){
            throw new Error("Email/Password incorrect.");
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new Error("Email/Password incorrect.");
        }

        const token = sign({
            email: user.email
        }, "a4a157c8270ad9f03781c1c9cc254ee4", { 
            subject: user.id, 
            expiresIn: "1d" 
        })

        return token;
    }
}

export { AuthenticateUserService }