import models from "../utils/db";

export const newTeacher = async(name:string,email:string,did:number,password:string)=>{
    try{
        await models.teacher.create({
            name:name,
            email:email,
            did:did,
            password:password
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

    }
    catch(e){

    }
}