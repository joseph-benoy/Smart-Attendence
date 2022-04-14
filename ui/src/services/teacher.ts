import axios from "axios";
import { apiUrls } from "../utils/urls";
import qs from 'qs';


type Inputs = {
    name: string,
    email: string,
    password:string,
    did:string
  };
export const getAllTeacherByDepts =async () => {
    try{
        const res = await axios.get(apiUrls.teacher.getAllTeachersByDept);
        return res.data;
    }
    catch(e){
        alert("Couldn't fetch teachers");
    }
}
export const deleteTeacher =async (id:number) => {
    try{
        await axios.delete(apiUrls.teacher.delete,{
            headers:{ 
                "Content-Type": "application/x-www-form-urlencoded"
              },
              data:qs.stringify({id:id})
        });
        alert("Deleted teacher");
    }
    catch(e){
        alert(e.message);
    }
}
export const addTeacher = async(data:Inputs)=>{
    try{
        const query = qs.stringify(data);
        await axios.post(apiUrls.teacher.add,query);
        alert("Registration successful! Now you can login.");
    }
    catch(e){
        alert(e.message);
    }
}