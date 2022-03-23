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
export const getAllCourses =async () => {
    try{
        const result = await models.course.findAll();
        return result;
    }
    catch(e){
        return{
            error:e.message
        }
    }
}

export const deleteCourse =async (id:number) => {
    try{
        await models.course.destroy({
            where:{
                id:id
            }
        });
        return {
            message:"delete course"
        }
    }
    catch(e){
        return{
            error:e.message
        }
    }
}