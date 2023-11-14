const { Router } = require('express');
const RooT = Router();
const Ctll = require('../controllers/rolesController.js');
//const {valrolesCreate, valrolesPut} = require('../Utils/rolesaVal.js');

RooT.get('/roles/', Ctll.GetRoles)
RooT.get('/roles/:ID', Ctll.GetOneRoles)
RooT.post('/roles/create', Ctll.SaveRoles)
RooT.post('/roles/put/:ID', Ctll.PutRoles)
RooT.get('/roles/del/:ID', Ctll.DelRoles)
module.exports = RooT;