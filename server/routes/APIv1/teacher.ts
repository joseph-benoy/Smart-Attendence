import express from 'express';
import { newTeacherAccount } from '../../controllers/teacher';


const router = express.Router();

router.post("/new",newTeacherAccount)

export {router as teacherRouter};