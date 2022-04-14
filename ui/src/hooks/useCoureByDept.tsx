import axios from "axios";
import { useEffect, useState } from "react"
import { course, dcourse } from "../types/course";
import { apiUrls } from "../utils/urls";

const useCourseByDept = (deptName:string,reload?:boolean)=>{
    const [courses,setCourses] = useState<Array<course>>([]);
    useEffect(()=>{
        axios.get(apiUrls.course.getAllByDepts)
        .then((res)=>{
            const data = res.data;
            for(let dept of data){
                if(dept.deptName===deptName){
                    setCourses(dept.courses);
                }
            }
        })
        .catch((e)=>{
            alert("couldn't fetch courses");
        })
    },[deptName]);
    return courses;
}

export default useCourseByDept;