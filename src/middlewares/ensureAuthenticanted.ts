import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string
}
 
export function ensureAuthenticanted(request: Request, response: Response, next: NextFunction) {
    // receber o token
    const authToken = request.headers.authorization;
    // validar se o token está preenchido
    if(!authToken){
        return response.status(401).end();
    }

    const [,token] = authToken.split(" ");
    // validar se token é válido
    try {
        const { sub } = verify(token, "a4a157c8270ad9f03781c1c9cc254ee4") as IPayload;
        // recuperar informações do usuário
        request.user_id = sub;

        return next();
    } catch (err) {
        return response.status(401).end();
    } 
    
}