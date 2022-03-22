import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/store';

export interface ProtectedRouteProps{
    component:JSX.Element,
    type:"admin" | "student" | "teacher"
}

export default function ProtectedRoute ({ component,type}:ProtectedRouteProps):JSX.Element {
    if(type==="admin"){
        const isAdmin = useAppSelector((state)=>state.auth.isAdminAuth);
        if(!isAdmin){
            return <Navigate to="/"/>
        }
    }
    else if(type==="student"){
        const isStudent = useAppSelector((state)=>state.auth.isStudentAuth);
        if(!isStudent){
            return <Navigate to="/"/>
        }
    }
    else{
        const isTeacher = useAppSelector((state)=>state.auth.isTeacherAuth);
        if(!isTeacher){
            return <Navigate to="/"/>
        }
    }

    return component;
}
