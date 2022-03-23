import { NextFunction,Request,Response } from "express";
import { badRequest, internalServerError, unAuthorizedRequest } from "../errors/customError";
import { addDept, deleteDepartment, getAllDepts } from "../services/department";

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
export const getDepartments = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const result = await getAllDepts();
        if(result){
            return res.status(200).json(result);
        }
        throw new Error("Couldn't fetch departments");
    }
    catch(e){
        next(internalServerError("Something went wrong : "+e));
    }
}
export const deleteDept = async(req:Request,res:Response,next:NextFunction)=>{
    console.log(req.body);
    try{
        if(req.body.id){
            const result = await deleteDepartment(req.body.id);
            if(result){
                return res.status(201).json(result);
            }
            next(badRequest("Couldn't delete department"));
        }
        next(badRequest("Department id missing"));
    }
    catch(e){
        next(internalServerError("Something went wrong : "+e));
    }
}