import express from 'express';

import productRoutes from './Routes/product.rout';
import userRoutes from './Routes/user.rout';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);

export default app;
