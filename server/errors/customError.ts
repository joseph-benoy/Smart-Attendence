import { StatusCodes } from "http-status-codes";
import { Error } from "./error"

export const badRequest = (message:string):Error=>{
    return {
        statusCode:(StatusCodes.BAD_REQUEST as number),
        message:message
    }; 
}
export const unAuthorizedRequest = (message:string):Error=>{
    return {
        statusCode:StatusCodes.UNAUTHORIZED,
        message:message
    };
}
export const internalServerError = (message:string):Error=>{
    return {
        statusCode:StatusCodes.INTERNAL_SERVER_ERROR,
        message:message
    };
}
