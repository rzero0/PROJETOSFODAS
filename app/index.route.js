var express = require('express');

var clients = require('./api/clients/client.route');
var products = require('./api/products/product.route');
var carts = require('./api/carts/cart.route');

var rootRouter = express.Router();

rootRouter.use('/clients', users);
rootRouter.use('/products', classes);
rootRouter.use('/carts', posts);

module.exports = rootRouter;
