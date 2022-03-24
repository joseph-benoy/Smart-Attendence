import express from 'express';
import { getAllTeachersBydepartment, newTeacherAccount, removeTeacher } from '../../controllers/teacher';


const router = express.Router();

router
.post("/new",newTeacherAccount)
.get("/bydepts",getAllTeachersBydepartment)
.delete("/delete",removeTeacher)

export {router as teacherRouter};