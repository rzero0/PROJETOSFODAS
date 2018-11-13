var express = require('express');
var clientsRoute = express.Router();
var clientCtrl = require('./client.ctrl');

clientsRoute.post('/login', clientCtrl.login);
clientsRoute.post('/', clientCtrl.addClient);
clientsRoute.post('/:login', clientCtrl.deleteClient);
clientsRoute.put('/', clientCtrl.updateClient);

module.exports = clientsRoute;
