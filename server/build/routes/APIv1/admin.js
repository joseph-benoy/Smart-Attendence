import express from 'express';
import { login } from '../../controllers/admin';
const router = express.Router();
router.post("/login", login);
export { router as adminRouter };
