import express from 'express';
import { adminRouter } from './admin';
import { courseRouter } from './course';
import { departmentRouter } from './department';
import { sessionRouter } from './session';
import { studentRouter } from './student';
import { teacherRouter } from './teacher';

const router = express.Router();

router
.use("/admin",adminRouter)
.use("/department",departmentRouter)
.use("/course",courseRouter)
.use("/teacher",teacherRouter)
.use("/student",studentRouter)
.use("/session",sessionRouter)


export default router;