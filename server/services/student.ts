import models from "../utils/db";
import bcrypt from "bcrypt";
import { sequelize } from "../utils/db";
import { QueryTypes } from "sequelize";
import { student } from "../models/student";
import { NextFunction,Response } from 'express';
import { createToken } from '../middlewares/jwt';
import { unAuthorizedRequest } from "../errors/customError";
export const createStudent =async (name:string,email:string,password:string,cid:number,sem:number) => {
    try{
        const pass = await bcrypt.hash(password,10);
        await models.student.create({
            name:name,
            email:email,
            password:pass,
            cid:cid,
            sem:sem
        });
        return{
            message:"student created"
        }
    }
    catch(e){
        return{
            error:e.message
        }
    }
}
export const getStudentBySem =async () => {
    try{
        const studentData:Array<student> = await sequelize.query("select student.id as sid,student.name as name,student.email as email,student.sem as sem,course.name as cname,dept.name as dname from student join course on student.cid=course.id join dept on course.did=dept.id",{
            type:QueryTypes.SELECT
        })
        return studentData;
    }
    catch(e){
        return{
            error:e.message
        }
    }
}
export const deleteStudent =async (id:number) => {
    try{
        await models.student.destroy({
            where:{
                id:id
            }
        })
        return{
            message:"removed student"
        }
    }
    catch(e){
        return{
            error:e.message
        }
    }
}
export const loginStudent = (email:string,password:string,res:Response,next:NextFunction):any=>{
    models.student.findOne({
        where:{
            email:email
        },
        raw:true
    }).then((data)=>{
        bcrypt.compare(password,data!.password)
        .then((result)=>{
            if(result){
                const accessToken = createToken({
                    email:data!.email,
                    id:data!.id
                });
                return res.cookie('access-token',accessToken,{
                    maxAge:Number(process.env.COOKIE_MAX_AGE),
                    httpOnly:true
                }).json(data);
            }
            else{
                return next(unAuthorizedRequest("Invalid password"));
            }
        })
    })
    .catch((reason)=>{
        return next(unAuthorizedRequest("Invalid email"));
    })
}