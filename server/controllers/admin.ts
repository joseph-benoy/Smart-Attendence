import { NextFunction,Request,Response } from "express";
import { loginAdmin } from "../services/admin";

export const login = (req:Request,res:Response,next:NextFunction)=>{
    const {email,password} = req.body;
    const result = loginAdmin(email,password);
    return res.json(result);
}