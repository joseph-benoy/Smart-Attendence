import express, { Router } from 'express';
import { addNewCourse } from '../../controllers/course';
import { validateToken } from '../../middlewares/jwt';

const router:Router  = express.Router();

router
.post("/new",addNewCourse)


export {router as courseRouter};