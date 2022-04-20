import express, { Router } from 'express';
import { all, newSession, removeSession, sessionBySem } from '../../controllers/session';
import { validateToken } from '../../middlewares/jwt';
import { getStudentBySem } from '../../services/student';

const router:Router = express.Router();

router
.post("/new",validateToken as any,newSession)
.get("/all",validateToken as any,all)
.delete("/delete",validateToken as any,removeSession)
.post("/getbysem",sessionBySem)

export {router as sessionRouter};