import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  public userService = new UserService();

  public async login(req: Request, res: Response) {
    const userData = req.body;
    const token = await this.userService.login(userData);
    res.status(201).json({ token });
  }
} 