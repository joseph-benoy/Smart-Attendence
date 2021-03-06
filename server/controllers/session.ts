import { NextFunction,Request,Response } from "express";
import { badRequest, unAuthorizedRequest,internalServerError } from "../errors/customError";
import { createSession, deleteSession, getAll, getSessionByCidSem, getSessionById, markAttendance } from "../services/sessions";

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
export const sessionBySem =async (req:Request,res:Response,next:NextFunction) => {
    try{
        const {cid,sem} = req.body;
        const result:{error:string} | any = await getSessionByCidSem(cid,sem);
        if(result.error){
            throw new Error(result.error);
        }
        return res.json(result);
    }
    catch(e){
        next(internalServerError("Something went wrong : "+e));
    }
}
export const attendance =async (req:Request,res:Response,next:NextFunction) => {
    try{
        const {sessionId,sid,cid,sem} = req.body;
        const result:{error:string} | any = await markAttendance(sessionId,sid,cid,sem);
        if(result.error){
            throw new Error(result.error);
        }
        return res.json(result);
    }
    catch(e){
        next(internalServerError("Something went wrong : "+e));
    }
}
export const sessionById =async (req:Request,res:Response,next:NextFunction) => {
    try{
        const {id} = req.body;
        const result:{error:string} | any = await getSessionById(id);
        if(result.error){
            throw new Error(result.error);
        }
        return res.json(result);
    }
    catch(e){
        next(internalServerError("Something went wrong : "+e));
    }
}