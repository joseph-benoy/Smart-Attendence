import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { adminLogin, teacherLog } from '../../store/slices/auth';

export interface ProtectedRouteProps{
    component:JSX.Element,
    type:"admin" | "student" | "teacher"
}

export default function ProtectedRoute ({ component,type}:ProtectedRouteProps):JSX.Element {
    const {isAdminAuth,isStudentAuth,isTeacherAuth} = useAppSelector((state)=>state.auth);
    const dispatch = useAppDispatch();
    if(sessionStorage.getItem("adminLogin")){
        dispatch(adminLogin());
    }
    if(sessionStorage.getItem("teacherLogin")){
        dispatch(teacherLog());
    }
    if(type==="admin"){
        if(!isAdminAuth){
            return <Navigate to="/"/>
        }
    }
    else if(type==="student"){
        if(!isStudentAuth){
            return <Navigate to="/"/>
        }
    }
    else{
        if(!isTeacherAuth){
            return <Navigate to="/"/>
        }
    }
    return component;
}
