import express, { Router } from 'express';
import { addNewCourse, deleteCourseById, getCourses } from '../../controllers/course';
import { validateToken } from '../../middlewares/jwt';

const router:Router  = express.Router();

router
.post("/new",validateToken as any,addNewCourse)
.get("/all",getCourses)
.delete("/delete",validateToken as any,deleteCourseById)







export {router as courseRouter};