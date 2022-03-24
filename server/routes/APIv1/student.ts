import express, { Router } from 'express';
import { newStudent } from '../../controllers/student';
import { validateToken } from '../../middlewares/jwt';

const router:Router = express.Router();

router.post("/new",newStudent)






export {router as studentRouter};