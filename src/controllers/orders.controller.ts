import { Request, Response } from 'express';
import OrdersService from '../services/oders.service';

export default class OrdersController {
  public ordersService = new OrdersService();

  public async getAll(_req: Request, res: Response) {
    const orders = await this.ordersService.getAll();
    res.status(200).json(orders);
  }
}