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