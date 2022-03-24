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

export const deleteCourse = async(id:number)=>{
    try{
        await axios.delete(apiUrls.course.delete,{
            headers:{ 
                "Content-Type": "application/x-www-form-urlencoded"
              },
              data:qs.stringify({id:id})
        })
        alert("Removed course!");
    }
    catch(e){
        alert("Failed to remove course!");
    }
}