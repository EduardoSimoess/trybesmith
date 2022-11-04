import { IOrders } from '../Interfaces/IOrders';
import OrdersModel from '../models/orders.model';

export default class OrdersService {
  public ordersModel = new OrdersModel();

  public async getAll(): Promise<IOrders[]> {
    const orders = await this.ordersModel.getAll();
    return orders;
  }
}