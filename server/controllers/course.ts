import { NextFunction,Request,Response } from "express";
import { badRequest, internalServerError} from "../errors/customError";
import { addCourse } from "../services/course";


export const addNewCourse =async (req:Request,res:Response,next:NextFunction) => {
    try{
        if(req.body.name){
            if(req.body.did){
                const result = await addCourse(req.body.name,req.body.did);
                if(result.error){
                    next(internalServerError(result.error))
                }
                return res.status(201).json(result);
            }
            else{
                next(badRequest("did is missing"));
            }
        }
        else{
            next(badRequest("course name is missing"));
        }
    }
    catch(e){

    }
}