import { RowDataPacket } from 'mysql2';
import mysql from './connection';
import { ILogin } from '../Interfaces/ILogin';
import { IObj } from '../Interfaces/IObj';

export default class LoginModel {
  public connection = mysql;

  public async login(user: ILogin): Promise<IObj[]> {
    const { username, password } = user;
    const [logedUser] = await this.connection.execute<(
    IObj[] & RowDataPacket[])>(
      'SELECT * FROM Trybesmith.Users WHERE username=? AND password=?',
      [username, password],
      );
    // console.log(logedUser[0].id);
    return logedUser;
  }
}