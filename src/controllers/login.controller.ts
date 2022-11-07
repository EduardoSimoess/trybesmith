import { Request, Response } from 'express';
import LoginService from '../services/login.service';

export default class LoginController {
  public loginService = new LoginService();

  public async newLogin(req: Request, res: Response) {
    const user = req.body;
    const { type, message } = await this.loginService.newLogin(user);
    if (type) {
      res.status(type).json({ message });
    } else {
      res.status(200).json({ token: message });
    }
  }
}