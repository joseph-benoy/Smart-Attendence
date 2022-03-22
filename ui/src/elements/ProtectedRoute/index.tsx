import * as React from 'react';
import { Route,Navigate } from 'react-router-dom';

export interface ProtectedRouteProps{
    component:JSX.Element
}

export default function ProtectedRoute ({ component, ...restOfProps }:ProtectedRouteProps):JSX.Element {
    const isAuthenticated = true;
    if(!isAuthenticated){
        return <Navigate to="/home"/>
    }
    return component;
}
