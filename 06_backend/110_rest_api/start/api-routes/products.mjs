import express from 'express';

const router = express.Router();

const products = [
  { name: "table", price: 1000 },
  { name: "chair", price: 100 },
  { name: "clock", price: 700 },
];

router.get('/products', function (req, res) {
  res.json(products);
});

router.get('/products/:id', function (req,res) {
  res.json(products[req.params.id]);
});

router.post('/products', function (req, res) {
  const newProduct = req.body;
  products.push(newProduct);
  console.log(products);
  res.json(newProduct);
});

router.delete('/products/:id', function (req, res) {
  const deleteId = req.params.id;
  products.splice(deleteId,1);
  console.log(products);
  //削除されたIDをレスポンスで返す
  res.json({deleteId});
});

router.patch('/products/:id', function (req, res) {
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

router.listen(PORT, function () {
  console.log(`Server start: http://localhost:${PORT}`);
});
