import { NextFunction,Request,Response } from "express";
import { badRequest, unAuthorizedRequest,internalServerError } from "../errors/customError";
import { createSession, deleteSession, getAll } from "../services/sessions";

export const newSession =async (req:any,res:Response,next:NextFunction) => {
    try{
        const result = await createSession({...req.body,tid:req.id});
        if(result.error){
            throw new Error(result.error);
        }
        return res.json(result);
    }
    catch(e){
        next(internalServerError("Something went wrong : "+e));
    }
}
export const all =async (req:Request,res:Response,next:NextFunction) => {
    try{
        const result:{error:string} | any = await getAll();
        if(result.error){
            throw new Error(result.error);
        }
        return res.json(result);
    }
    catch(e){
        next(internalServerError("Something went wrong : "+e));
    }
}
export const removeSession = async (req:Request,res:Response,next:NextFunction) => {
    try{
        const result:{error:string} | any = await deleteSession(req.body.id);
        if(result.error){
            throw new Error(result.error);
        }
        return res.json(result);
    }
    catch(e){
        next(internalServerError("Something went wrong : "+e));
    }
}