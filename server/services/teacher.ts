import models from "../utils/db";

export const newTeacher = async(name:string,email:string,did:number)=>{
    try{
        await models.teacher.create({
            name:name,
            email:email,
            did:did
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