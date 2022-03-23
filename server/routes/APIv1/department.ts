import express, { Router } from 'express';
import { newDepartment } from '../../controllers/department';
import { validateToken } from '../../middlewares/jwt';

const router:Router = express.Router();

router.post("/new",validateToken as any,newDepartment)

export {router as departmentRouter};