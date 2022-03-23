import express from 'express';
import { adminRouter } from './admin';
import { departmentRouter } from './department';

const router = express.Router();

router
.use("/admin",adminRouter)
.use("/department",departmentRouter)





export default router;