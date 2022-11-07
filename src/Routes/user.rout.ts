import { Router } from 'express';
import UserController from '../controllers/user.controller';
import userMidllewares from '../midllewares/user.validation';

const router = Router();

const userController = new UserController();

router.post(
  '/', 
  userMidllewares.usernameValidation,
  userMidllewares.passwordValidation,
  userMidllewares.levelValidation,
  userMidllewares.classeValidation,
  userController.login.bind(userController),
);

export default router;