import { NextFunction,Request,Response } from "express";
import { unAuthorizedRequest } from "../errors/customError";
import { loginAdmin } from "../services/admin";

export const login = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const {email,password} = req.body;
        loginAdmin(email,password,res,next);
    }
    catch(e){
        next(unAuthorizedRequest("Invalid credentials"));
    }
}