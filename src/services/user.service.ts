import jsonwebtoken from 'jsonwebtoken';
import { IUser } from '../Interfaces/IUser';
import UserModel from '../models/user.model';

export default class UserService {
  public jsonwebtoken = jsonwebtoken;

  public userModel = new UserModel();

  public async login(userData: IUser): Promise<string> {
    // const { username, classe, level, password } = userData;
    await this.userModel.create(userData);

    const token = await this.jsonwebtoken.sign(
      userData, 
      process.env.JWT_SECRET as string,
      { algorithm: 'HS256', expiresIn: '7d' },
    );
    console.log(token);
    return token;
  }
}