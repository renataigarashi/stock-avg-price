// src/routes/userRoute.ts
import express from 'express';
import { UserController } from '../controllers/userController';


const router = express.Router();

const userController = new UserController();

router.post('/', userController.create);
router.get('/', userController.getAll)


export default router;
