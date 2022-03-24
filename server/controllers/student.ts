import { NextFunction,Request,Response } from "express";
import { badRequest, internalServerError} from "../errors/customError";
import { createStudent } from "../services/student";

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