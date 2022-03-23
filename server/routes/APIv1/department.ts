import express, { Router } from 'express';
import { deleteDept, getDepartments, newDepartment } from '../../controllers/department';
import { validateToken } from '../../middlewares/jwt';

const router:Router = express.Router();

router
.post("/new",validateToken as any,newDepartment)
.get("/all",validateToken as any,getDepartments)
.delete("/delete",validateToken as any,deleteDept)

export {router as departmentRouter};