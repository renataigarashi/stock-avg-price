// src/routes/userRoute.ts
import express from 'express';
import { UserController } from '../controllers/userController';
import { UserRepository } from '../repositories/userRepositoty';


const router = express.Router();

const userRepository = new UserRepository();
const userController = new UserController(userRepository);

router.post('/', userController.create.bind(userController));
router.get('/', userController.getAll.bind(userController));

export default router;
