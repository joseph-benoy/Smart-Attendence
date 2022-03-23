import axios from "axios";
import { useEffect, useState } from "react";
import { dept } from "../types/dept";
import { apiUrls } from "../utils/urls";
const useDept = (reload:boolean)=>{
    const [depts,setDepts] = useState<Array<dept>>([]);
    useEffect(()=>{
        axios.get(apiUrls.dept.all).then((res)=>{
            setDepts(res.data);
        })
    },[reload]);
    return depts;
}

export default useDept;