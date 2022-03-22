import bcrypt from 'bcrypt';
import { NextFunction,Response } from 'express';
import { createToken } from '../middlewares/jwt';
import models from '../utils/db';
import { unAuthorizedRequest } from '../errors/customError';



export const loginAdmin = (email:string,password:string,res:Response,next:NextFunction):any=>{
    models.admin.findOne({
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