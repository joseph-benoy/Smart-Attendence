import models from "../utils/db";
import bcrypt from "bcrypt";
import { sequelize } from "../utils/db";
import { QueryTypes } from "sequelize";
import { dteacher, teacher } from "../types/teacher";
import { NextFunction,Response } from 'express';
import { createToken } from '../middlewares/jwt';
import { unAuthorizedRequest } from "../errors/customError";

export const newTeacher = async(name:string,email:string,did:number,password:string)=>{
    try{
        const pass = await bcrypt.hash(password,10);
        await models.teacher.create({
            name:name,
            email:email,
            did:did,
            password:pass
        })
        return{
            message:"Teacher account created"
        }
    }
    catch(e){
        return{
            error:e.message
        }
    }
}
export const getTeachersByDepts =async () => {
    try{
        const teacherData:Array<teacher> = await sequelize.query("select teacher.id as tid,teacher.name as tname,teacher.email as temail,dept.id as did,dept.name as dname from teacher,dept where teacher.did=dept.id",{
            type:QueryTypes.SELECT
        })
        let dnames:string[] = teacherData.map((teacher)=>(teacher.dname))
        dnames = [...new Set<string>(dnames)];
        const finalData:object[] = [];
        dnames.map((dname)=>{
            let teacherObject:dteacher = {
                deptName:dname,
                teachers:[]
            }
            teacherObject.teachers = teacherData.filter((teacher)=>(teacher.dname===dname))
            finalData.push(teacherObject);
        })
        return finalData;
    }
    catch(e){
        return{
            error:e.message
        }
    }
}
export const deleteTeacher =async (id:number) => {
    try{
        await models.teacher.destroy({
            where:{
                id:id
            }
        })
        return{
            message:"removed teacher"
        }
    }
    catch(e){
        return{
            error:e.message
        }
    }
}
export const loginTeacher = (email:string,password:string,res:Response,next:NextFunction):any=>{
    models.teacher.findOne({
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
                }).json({
                    login:"success"
                });
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