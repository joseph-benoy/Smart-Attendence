import axios from "axios";
import { apiUrls } from "../utils/urls";
import qs from 'qs';


type Inputs = {
    name: string,
    email: string,
    password: string,
    cid: string,
    sem: string,
  };

export const addStudent = async(data:Inputs)=>{
    try{
        const query = qs.stringify(data);
        await axios.post(apiUrls.student.new,query);
        alert("Registration successful! Now you can login.");
    }
    catch(e){
        alert(e.message);
    }
}
export const studentLogin = async(data:{email:string,password:string})=>{
    try{
        const query = qs.stringify(data);
        const res = await axios.post(apiUrls.student.login,query);
        return res.data;
    }
    catch(e){
        alert("Failed to login!");
        return false;
    }
}