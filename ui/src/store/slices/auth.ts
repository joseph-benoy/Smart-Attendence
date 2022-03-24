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
        }
    }
})

export const {adminLogin,adminLogout} = authSlice.actions;
export default authSlice.reducer;