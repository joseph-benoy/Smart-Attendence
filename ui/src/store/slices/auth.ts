import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:"auth",
    initialState:{
        isAdminAuth:false,
        isTeacherAuth:false,
        isStudentAuth:false
    },
    reducers:{
        adminLogin:(state)=>{
            sessionStorage.setItem("adminLogin","yes");
            state.isAdminAuth = true;
        },
        adminLogout:(state)=>{
            sessionStorage.removeItem("adminLogin");
            state.isAdminAuth = false;
        },
        teacherLog:(state)=>{
            sessionStorage.setItem("teacherLogin","yes");
            state.isTeacherAuth = true;
        },
        teacherOut:(state)=>{
            sessionStorage.removeItem("teacherLogin");
            state.isTeacherAuth = false;
        },
        studentLog:(state)=>{
            sessionStorage.setItem("studentLogin","yes");
            state.isStudentAuth = true;
        },
        studentOut:(state)=>{
            sessionStorage.removeItem("studentLogin");
            state.isTeacherAuth = false;
        }
    }
})

export const {adminLogin,adminLogout,teacherLog,teacherOut,studentLog,studentOut} = authSlice.actions;
export default authSlice.reducer;