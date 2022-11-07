import express from 'express';

import productRoutes from './Routes/product.rout';
import userRoutes from './Routes/user.rout';
import ordersRoutes from './Routes/orders.rout';
import loginRoutes from './Routes/login.rout';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', ordersRoutes);
app.use('/login', loginRoutes);

export default app;
