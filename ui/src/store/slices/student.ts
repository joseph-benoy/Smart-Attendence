import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
    name:"student",
    initialState:{
        id:0,
        name:"",
        email:"",
        cid:0,
        sem:0
    },
    reducers:{
        updateStudent:(state,action)=>{
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.cid = action.payload.cid;
            state.sem = action.payload.sem;
        }
    }
})
export const {updateStudent} = studentSlice.actions;
export default studentSlice.reducer;