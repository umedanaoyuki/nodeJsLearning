import express from 'express';
import productRoutes from './api-routes/products.mjs';

const PORT = 8080;
const app = express();

app.use(express.json());

app.use('/api', productRoutes);

app.listen(PORT, function () {
  console.log(`Server start: http://localhost:${PORT}`);
});
