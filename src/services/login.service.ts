import jsonwebtoken from 'jsonwebtoken';
import { ILogin } from '../Interfaces/ILogin';
import LoginModel from '../models/login.model';
import { IReturn } from '../Interfaces/IReturn';
// import { IObj } from '../Interfaces/IObj';

export default class LoginService {
  public jsonwebtoken = jsonwebtoken;

  public loginModel = new LoginModel();

  public async newLogin(user: ILogin): Promise<IReturn> {
    const { username, password } = user;
    if (!username) return { type: 400, message: '"username" is required' };
    if (!password) return { type: 400, message: '"password" is required' };
    const confirmed = await this.loginModel.login(user);
    if (confirmed.length === 0) return { type: 401, message: 'Username or password invalid' };
    // const u: ILogin = confirmed[0];
    // console.log(u);
    const token = await this.jsonwebtoken.sign(
      user, 
      process.env.JWT_SECRET as string,
      { algorithm: 'HS256', expiresIn: '7d' },
    );
    return { type: null, message: token };
  } 
}