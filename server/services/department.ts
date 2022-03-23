import models from "../utils/db";

export const addDept = async(name:string)=>{
    try{
        await models.dept.create({name:name});
        return {
            message:"created new department "+name
        }
    }
    catch(e){
        return false;
    }
}
export const getAllDepts = async()=>{
    try{
        const result = await models.dept.findAll();
        return result;
    }
    catch(e){
        return false;
    }
}
export const deleteDepartment = async(id:number)=>{
    try{
        await models.dept.destroy({
            where:{
                id:id
            }
        })
        return{
            message:"Deleted department"
        }
    }
    catch(e){
        return false;
    }
}