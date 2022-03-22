import pkg, { JwtPayload } from 'jsonwebtoken';
const { sign,verify,decode } = pkg;
import 'dotenv/config'
import { NextFunction,Request,Response } from 'express';
import { Payload } from '../types/payload';
import { IValidateTokenReq } from '../types/IValidateTokenReq';
import { IJwtPayload } from '../types/IJwtPayload';

const secret:string = process.env.JWT_CODE as string;

export const createToken = (payload:Payload)=>{
    return sign(payload,secret);
}

export const validateToken = (req:IValidateTokenReq,res:Response,next:NextFunction)=>{
    const accessToken = req.cookies['access-token'];
    if(!accessToken){
        return res.status(401).json({error:"user not authenticated"});
    }
    else{
        try{
            const payload:IJwtPayload = verify(accessToken,secret) as IJwtPayload;
            if(payload){
                req.authenticated = true;
                req.username = payload.email;
                req.id = payload.id;
                return next();
            }
        }
        catch(err){
            return res.status(401).json({error:"access token invalid"});
        }
    }
}