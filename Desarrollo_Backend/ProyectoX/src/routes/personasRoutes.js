const { Router } = require('express');
const RooT = Router();
const Ctll = require('../controllers/personasControllers.js');
const {valPersonCreate, valPersonPut} = require('../Utils/personaVal.js');

RooT.get('/person/', Ctll.GetPerson)
RooT.get('/person/:ID', Ctll.GetOnePerson)
RooT.post('/person/create', valPersonCreate(), Ctll.SavePerson)
RooT.post('/person/put/:ID', Ctll.PutPerson)
RooT.get('/person/del/:ID', Ctll.DelPerson)
module.exports = RooT;