const { Router } = require('express');
const RooT = Router();
const Ctll = require('../controllers/usuariosController.js');
//const {valusuariosCreate, valusuariosPut} = require('../Utils/usuariosaVal.js');

RooT.get('/usuarios/', Ctll.GetUsuario)
RooT.get('/usuarios/:ID', Ctll.GetOneUsuario)
RooT.post('/usuarios/create', Ctll.SaveUsuario)
RooT.post('/usuarios/put/:ID', Ctll.PutUsuario)
RooT.get('/usuarios/del/:ID', Ctll.DelUsuario)
module.exports = RooT;