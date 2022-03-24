import models from "../utils/db";
import { sequelize } from "../utils/db";
import { QueryTypes } from "sequelize";
import { course, dcourse } from "../types/course";

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
export const getCoursesByDepartMents = async()=>{
    try{
        const courseData:Array<course> = await sequelize.query("select course.id as cid,course.name as cname,course.did as did,dept.name as dname from course,dept where dept.id=course.did",{
            type:QueryTypes.SELECT
        })
        let dnames:string[] = [];
        courseData.map((course)=>{
            dnames.push(course.dname)
        })
        dnames = [...new Set(dnames)];
        const finalData:object[] = [];
        dnames.map((dept)=>{
            let dcourse:dcourse = {
                deptName:dept,
                courses:[]
            };
            dcourse.courses = courseData.filter((course)=>(course.dname===dept))
            finalData.push(dcourse);
        })
        return finalData;
    }
    catch(e){
        return{
            error:e.message
        }
    }
}