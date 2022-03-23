import { NextFunction,Request,Response } from "express";
import { badRequest, internalServerError, unAuthorizedRequest } from "../errors/customError";
import { addDept } from "../services/department";

export const newDepartment = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        if(req.body.name){
            const result = await addDept(req.body.name);
            if(result){
                return res.status(201).json(result);
            }
            next(badRequest("Couldn't create department"));
        }
        next(badRequest("Department name missing"));
    }
    catch(e){
        next(internalServerError("Something went wrong : "+e));
    }
}