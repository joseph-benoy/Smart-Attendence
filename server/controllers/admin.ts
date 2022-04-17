import { NextFunction,Request,Response } from "express";
import { badRequest, unAuthorizedRequest } from "../errors/customError";
import { loginAdmin } from "../services/admin";

export const login = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        if(req.body.email){
            if(req.body.password){
                loginAdmin(req.body.email,req.body.password,res,next);
            }
            else{
                next(badRequest("Missing password"));
            }
        }   
        else{
            next(badRequest("Missing email"));
        }
    }
    catch(e){
        next(unAuthorizedRequest("Invalid credentials"));
    }
}