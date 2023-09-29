import express from 'express';

const PORT = 8080;
const app = express();

app.use(express.json());

const products = [
  { name: "table", price: 1000 },
  { name: "chair", price: 100 },
  { name: "clock", price: 700 },
];

app.get('/products', function (req, res) {
  res.json(products);
});

app.post('/products', function (req, res) {
  const newProduct = req.body;
  products.push(newProduct);
  console.log(products);
  res.json(newProduct);
});

app.delete('/products/:id', function (req, res) {
  const deleteId = req.params.id;
  products.splice(deleteId,1);
  console.log(products);
  //削除されたIDをレスポンスで返す
  res.json({deleteId});
});

app.patch('/products/:id', function (req, res) {
  console.log('test');
  const targetProduct = products[req.params.id];
  if(req.body.hasOwnProperty('name')) {
    targetProduct.name = req.body.name;
  }
  if(req.body.hasOwnProperty('price')) {
    targetProduct.price = req.body.price;
  }
  console.log(products);
  res.json(targetProduct);
});

app.listen(PORT, function () {
  console.log(`Server start: http://localhost:${PORT}`);
});
