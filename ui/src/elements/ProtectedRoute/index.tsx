import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/store';

export interface ProtectedRouteProps{
    component:JSX.Element,
    type:"admin" | "student" | "teacher"
}

export default function ProtectedRoute ({ component,type}:ProtectedRouteProps):JSX.Element {
    const {isAdminAuth,isStudentAuth,isTeacherAuth} = useAppSelector((state)=>state.auth);
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
