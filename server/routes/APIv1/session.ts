import express, { Router } from 'express';
import { all, attendance, newSession, removeSession, sessionById, sessionBySem } from '../../controllers/session';
import { validateToken } from '../../middlewares/jwt';

const router:Router = express.Router();

router
.post("/new",validateToken as any,newSession)
.get("/all",validateToken as any,all)
.delete("/delete",validateToken as any,removeSession)
.post("/getbysem",sessionBySem)
.post("/attendance",attendance)
.post("/sessionbyid",sessionById)

export {router as sessionRouter};