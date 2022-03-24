import express from 'express';
import { getAllTeachersBydepartment, newTeacherAccount } from '../../controllers/teacher';


const router = express.Router();

router
.post("/new",newTeacherAccount)
.get("/bydepts",getAllTeachersBydepartment)



export {router as teacherRouter};