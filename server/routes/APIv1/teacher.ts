import express from 'express';
import { getAllTeachersBydepartment, newTeacherAccount, removeTeacher } from '../../controllers/teacher';
import { validateToken } from '../../middlewares/jwt';


const router = express.Router();

router
.post("/new",newTeacherAccount)
.get("/bydepts",getAllTeachersBydepartment)
.delete("/delete",validateToken as any,removeTeacher)

export {router as teacherRouter};