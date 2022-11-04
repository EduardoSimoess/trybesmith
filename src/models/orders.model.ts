import { RowDataPacket } from 'mysql2';
import mysql from './connection';
import { IOrders } from '../Interfaces/IOrders';

export default class OrdersModel {
  public connection = mysql;

  public async getAll(): Promise<IOrders[]> {
    const [result] = await this.connection.execute<(IOrders[] & RowDataPacket[])>(
      `SELECT O.id, O.userId, JSON_ARRAYAGG(P.id) AS productsIds FROM 
      Trybesmith.Orders AS O
        INNER JOIN Trybesmith.Products AS P
        ON O.id = P.orderId
        GROUP BY O.id;`);
    return result;
  }
}