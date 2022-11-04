import { Request, Response } from 'express';
import UserService from '../services/product.service';

export default class ProductController {
  public userService = new UserService();

  async create(req: Request, res: Response) {
    const product = req.body;
    const newProduct = await this.userService.create(product);
    res.status(201).json(newProduct); 
  }

  async getAll(_req: Request, res: Response) {
    const products = await this.userService.getAll();
    res.status(200).json(products); 
  }
}