import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/store';

export interface ProtectedRouteProps{
    component:JSX.Element
}

export default function ProtectedRoute ({ component, ...restOfProps }:ProtectedRouteProps):JSX.Element {
    const isAdmin = useAppSelector((state)=>state.auth.isAdminAuth);
    if(!isAdmin){
        return <Navigate to="/home"/>
    }
    return component;
}
