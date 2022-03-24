import axios from "axios";
import { apiUrls } from "../utils/urls";

export const getAllTeacherByDepts =async () => {
    try{
        const res = await axios.get(apiUrls.teacher.getAllTeachersByDept);
        return res.data;
    }
    catch(e){
        alert("Couldn't fetch teachers");
    }
}
