import { NextFunction,Request,Response } from "express";
import { badRequest, internalServerError, unAuthorizedRequest} from "../errors/customError";
import { createStudent, deleteStudent, getStudentBySem, loginStudent } from "../services/student";

export const newStudent =async (req:Request,res:Response,next:NextFunction) => {
    try{
        if(req.body.name){
            if(req.body.password)
            {
                if(req.body.email){
                    if(req.body.cid){
                        if(req.body.sem){
                            const {name,password,email,cid,sem} = req.body;
                            const result = await createStudent(name,email,password,cid,sem);
                            if(result.error){
                                throw new Error(result.error);
                            }
                            return res.status(201).json(result);
                        }
                        next(badRequest("sem is missing"));
                    }
                    next(badRequest("cid is missing"));
                }
                next(badRequest("email is missing"));
            }
            next(badRequest("password is missing"));
        }
        next(badRequest("name is missing"));
    }
    catch(e){
        next(internalServerError("Something went wrong : "+e));
    }
}
export const studentBySem =async (req:Request,res:Response,next:NextFunction) => {
    try{
        const result:{error:string} | any = await getStudentBySem();
        if(result.error){
            throw new Error(result.error);
        }
        return res.status(201).json(result);
    }
    catch(e){
        next(internalServerError("Something went wrong : "+e));
    }
}
export const removeStudent =async (req:Request,res:Response,next:NextFunction) => {
    try{
        if(req.body.id){
            const result = await deleteStudent(req.body.id);
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
export const authStudent = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        if(req.body.email){
            if(req.body.password){
                loginStudent(req.body.email,req.body.password,res,next);
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