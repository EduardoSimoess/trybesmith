import { IProduct } from '../Interfaces/IProduct';
import UserModel from '../models/product.model';

export default class UserService {
  public user = new UserModel();

  public create(userData: IProduct): Promise<IProduct> {
    return this.user.create(userData);
  }
}