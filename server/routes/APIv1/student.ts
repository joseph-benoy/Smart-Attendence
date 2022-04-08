import express, { Router } from 'express';
import { newStudent, removeStudent, studentBySem } from '../../controllers/student';
import { validateToken } from '../../middlewares/jwt';

const router:Router = express.Router();

router
.post("/new",newStudent)
.get("/all",studentBySem)
.delete("/delete",removeStudent)




export {router as studentRouter};