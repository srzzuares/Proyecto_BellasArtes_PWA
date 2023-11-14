const { Router } = require('express');
const RooT = Router();
const Ctll = require('../controllers/artistasController');
//const {valartistaCreate, valartistaPut} = require('../Utils/artistaaVal.js');

RooT.get('/artista/', Ctll.GetArtista)
RooT.get('/artista/:ID', Ctll.GetOneArtista)
RooT.post('/artista/create', Ctll.SaveArtista)
RooT.post('/artista/put/:ID', Ctll.PutArtista)
RooT.get('/artista/del/:ID', Ctll.DelArtista)
module.exports = RooT;