import { RowDataPacket, ResultSetHeader } from 'mysql2';
import mysql from './connection';
import { IProduct } from '../Interfaces/IProduct';

export default class ProductModel {
  public connection = mysql;

  public async create(user: IProduct): Promise<IProduct> {
    const { name, amount } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    // console.log(result);
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }

  public async getAll(): Promise<IProduct[]> {
    const result = await this.connection.execute<(IProduct[] & RowDataPacket[])>(
      'SELECT * FROM Trybesmith.Products');
    console.log(result);
    const [rows] = result;
    return rows;
  }
}