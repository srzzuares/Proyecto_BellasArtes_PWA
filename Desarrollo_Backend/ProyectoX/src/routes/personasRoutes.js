const { Router } = require('express')
const RooT = Router()
const Ctll = require('../controllers/personasControllers.js')

RooT.get('/', Ctll.GetPerson)
// RooT.get('/obtAct/:idSa', Ctll.GetOnePerson)
// RooT.post('/create', Ctll.SavePerson)
// RooT.post('/put/:idSa', Ctll.PutPerson)
// RooT.get('/del/:idSa', Ctll.DelPerson)
module.exports = RooT;