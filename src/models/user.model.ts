import { ResultSetHeader } from 'mysql2';
import mysql from './connection';
import { IUser } from '../Interfaces/IUser';

export default class UserModel {
  public connection = mysql;

  public async create(user: IUser) {
    const { username, classe, level, password } = user;
    await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
  }
}