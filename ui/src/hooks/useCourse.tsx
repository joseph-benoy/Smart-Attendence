import axios from "axios";
import { useEffect, useState } from "react"
import { dcourse } from "../types/course";
import { apiUrls } from "../utils/urls";

const useCourse = (reload?:boolean)=>{
    const [courses,setCourses] = useState<Array<dcourse>>([]);
    useEffect(()=>{
        axios.get(apiUrls.course.getAllByDepts)
        .then((res)=>{
            setCourses(res.data);
        })
        .catch((e)=>{
            alert("couldn't fetch courses");
        })
    },[reload]);
    return courses;
}

export default useCourse;