import axios from "axios";
import { apiUrls } from "../utils/urls";

type input = {
    email:string,
    password:string
}
export const loginAdmin = async(data:input)=>{
    try{
        await axios.post(apiUrls.adminAuth,data);
        alert("admin login");
    }
    catch(e){
        alert("Couldn't login!");
    }
}
export const loginTeacher = ()=>{

}
export const loginStudent = ()=>{

}