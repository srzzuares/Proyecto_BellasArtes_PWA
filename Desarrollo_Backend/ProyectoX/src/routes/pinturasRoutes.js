const { Router } = require('express');
const RooT = Router();
const Ctll = require('../controllers/pinturasController.js');
//const {valpinturasCreate, valpinturasPut} = require('../Utils/pinturasaVal.js');

RooT.get('/pinturas/', Ctll.GetPintura)
RooT.get('/pinturas/:ID', Ctll.GetOnePintura)
RooT.post('/pinturas/create', Ctll.SavePintura)
RooT.post('/pinturas/put/:ID', Ctll.PutPintura)
RooT.get('/pinturas/del/:ID', Ctll.DelPintura)
module.exports = RooT;