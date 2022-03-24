import qs from "qs";
import axios from "axios";
import { apiUrls } from "../utils/urls";

export const addCourse = async(name:string,did:string)=>{
    try{
        await axios.post(apiUrls.course.new,qs.stringify({
            name:name,
            did:did
        }));
        alert("Created new course "+name);
    }
    catch(e){
        alert("Couldn't add new course");
    }
}