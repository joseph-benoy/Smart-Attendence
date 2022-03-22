import { Request } from "express";

export interface IValidateTokenReq extends Request{
    authenticated:boolean,
    username:string,
    id:string
}