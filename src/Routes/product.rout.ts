import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import midlleware from '../midllewares/product.validation';

const router = Router();

const productController = new ProductController();

router.post(
  '/', 
  midlleware.nameValidation, 
  midlleware.amountValidation,
  productController.create.bind(productController),
);
router.get('/', productController.getAll.bind(productController));

export default router;