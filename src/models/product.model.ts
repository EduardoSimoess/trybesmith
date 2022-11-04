import { ResultSetHeader } from 'mysql2';
import mysql from './connection';
import { IProduct } from '../Interfaces/IProduct';

export default class UserModel {
  public connection = mysql;

  public async create(user: IProduct): Promise<IProduct> {
    const { name, amount } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    console.log(result);
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }
}