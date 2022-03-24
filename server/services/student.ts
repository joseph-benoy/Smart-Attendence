import models from "../utils/db";
import bcrypt from "bcrypt";

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