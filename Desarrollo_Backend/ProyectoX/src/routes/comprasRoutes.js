const { Router } = require('express');
const RooT = Router();
const Ctll = require('../controllers/comprasController.js');
//const {valcomprasCreate, valcomprasPut} = require('../Utils/comprasaVal.js');

RooT.get('/compras/', Ctll.GetCompras)
RooT.get('/compras/:ID', Ctll.GetOneCompras)
RooT.post('/compras/create', Ctll.SaveCompras)
RooT.post('/compras/put/:ID', Ctll.PutCompras)
// RooT.get('/compras/del/:ID', Ctll.Delcompras)
module.exports = RooT;