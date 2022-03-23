import express from 'express';
import { adminRouter } from './admin';
import { courseRouter } from './course';
import { departmentRouter } from './department';

const router = express.Router();

router
.use("/admin",adminRouter)
.use("/department",departmentRouter)
.use("/course",courseRouter)





export default router;