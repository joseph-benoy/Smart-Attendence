import { NextFunction,Request,Response } from "express";
import { badRequest, internalServerError, unAuthorizedRequest} from "../errors/customError";
import { deleteTeacher, getTeachersByDepts, loginTeacher, newTeacher } from "../services/teacher";

export const newTeacherAccount =async (req:Request,res:Response,next:NextFunction) => {
    try{
        if(req.body.name){
            if(req.body.email){
                if(req.body.did){
                    if(req.body.password){
                        const {name,email,did,password} = req.body;
                        const result = await newTeacher(name,email,did,password);
                        if(result.error){
                            throw new Error(result.error);
                        }
                        return res.status(201).json(result);
                    }
                    next(badRequest("missing password"));
                }
                next(badRequest("missing did"));
            }
            next(badRequest("missing email"));
        }
        next(badRequest("missing name"));
    }
    catch(e){
        next(internalServerError("Something went wrong : "+e));
    }
}
export const getAllTeachersBydepartment = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const result:{error:string} | any = await getTeachersByDepts();
        if(result.error){
            throw new Error(result.error);
        }
        return res.json(result);
    }
    catch(e){
        next(internalServerError("Something went wrong : "+e));
    }
}
export const removeTeacher =async (req:Request,res:Response,next:NextFunction) => {
    try{
        if(req.body.id){
            const result = await deleteTeacher(req.body.id);
            if(result.error){
                throw new Error(result.error);
            }
            return res.json(result);
        }
        next(badRequest("id is missing"));
    }
    catch(e){
        next(internalServerError("Something went wrong : "+e));
    }
}
export const authTeacher = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        if(req.body.email){
            if(req.body.password){
                loginTeacher(req.body.email,req.body.password,res,next);
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