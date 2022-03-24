import axios from "axios"
import { apiUrls } from "../utils/urls";
import qs from "qs";

export const deleteDept =async (id:number) => {
    try{
        const query = qs.stringify({id:id});
        await axios.delete(apiUrls.dept.delete,{
            headers:{ 
                "Content-Type": "application/x-www-form-urlencoded"
              },
              data:query
        });
        alert("Deleted department!");
    }
    catch(e){
        alert("Couldn't delete department");
    }
}
export const addNewDept =async (name:string) => {
    try{
        const query = qs.stringify({name:name});
        await axios.post(apiUrls.dept.new,query);
        alert("Department "+name+" added!");
    }
    catch(e){
        alert("Couldn't add new department")
    }
}