import express, { Router } from 'express';
import { newSession } from '../../controllers/session';
import { validateToken } from '../../middlewares/jwt';

const router:Router = express.Router();

router
.post("/new",newSession)




export {router as sessionRouter};