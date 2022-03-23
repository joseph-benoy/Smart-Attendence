import express, { Router } from 'express';
import { getDepartments, newDepartment } from '../../controllers/department';
import { validateToken } from '../../middlewares/jwt';

const router:Router = express.Router();

router
.post("/new",validateToken as any,newDepartment)
.get("/all",validateToken as any,getDepartments)



export {router as departmentRouter};