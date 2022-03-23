import models from "../utils/db";

export const addCourse = async(name:string,did:number)=>{
    try{
        await models.course.create({
            name:name,
            did:did
        })
        return {
            message:"Add new course "+name
        }
    }
    catch(e){
        return {error:e.message};
    }
}