import { NextFunction,Request,Response } from "express";
import { badRequest, internalServerError} from "../errors/customError";
import { addCourse, deleteCourse, getAllCourses, getCoursesByDepartMents } from "../services/course";


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
        next(internalServerError("something went wrong"))
    }
}
export const getCourses = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const result:{error:string} | any = await getAllCourses();
        if(result.error){
            next(internalServerError(result.error))
        }
        return res.json(result);
    }
    catch(e){
        next(internalServerError("something went wrong"));
    }
}
export const deleteCourseById = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        if(req.body.id){
            const result:{error:string} | any = await deleteCourse(req.body.id);
            if(result.error){
                next(internalServerError(result.error))
            }
            return res.json(result);
        }
        else{
            next(badRequest("id is missing"));
        }
    }
    catch(e){
        next(internalServerError("something went wrong"));
    }
}
export const getCourseByDepts = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const result:{error:string} | any = await getCoursesByDepartMents();
        if(result.error){
            next(internalServerError("Couldn't fetch courses"));
        }
        return res.json(result);
    }
    catch(e){
        next(internalServerError("something went wrong"));
    }
}