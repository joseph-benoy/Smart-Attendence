import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import studentReducer from "./slices/student"

const store = configureStore({
    reducer:{
        auth:authReducer,
        student:studentReducer
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch