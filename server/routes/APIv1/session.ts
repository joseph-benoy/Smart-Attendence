import express, { Router } from 'express';
import { all, newSession } from '../../controllers/session';
import { validateToken } from '../../middlewares/jwt';

const router:Router = express.Router();

router
.post("/new",newSession)
.get("/all",all)



export {router as sessionRouter};