const { Router } = require('express');
const RooT = Router();
const Ctll = require('../controllers/generoController.js');
//const {valGeneroCreate, valGeneroPut} = require('../Utils/generoaVal.js');

RooT.get('/genero/', Ctll.GetGenero)
RooT.get('/genero/:ID', Ctll.GetOneGenero)
RooT.post('/genero/create', Ctll.SaveGenero)
RooT.post('/genero/put/:ID', Ctll.PutGenero)
RooT.get('/genero/del/:ID', Ctll.DelGenero)
module.exports = RooT;