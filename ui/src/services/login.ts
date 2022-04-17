import axios from "axios";
import { apiUrls } from "../utils/urls";
import qs from "qs";
import history from "../utils/history";

type input = {
    email:string,
    password:string
}
export const loginAdmin = async(data:input)=>{
    try{
        const query = qs.stringify(data)
        await axios.post(apiUrls.adminAuth,query);
        return true;
    }
    catch(e){
        alert("Couldn't login!");
    }
}
