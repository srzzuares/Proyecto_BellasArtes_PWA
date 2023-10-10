const Ctll = {}

Ctll.GetPerson = async (req, res) => {
    res.status(200).json({mensaje: 'Hola Humano'})
}
// Ctll.GetOnePerson = async (req, res) => {
//     const getOnePerson = await PersonModelo.findOne({ Id_Person: req.params.idSa })
//     console.log(getOnePerson)
//     if (getOnePerson == null) res.status(404).json({mensaje:'Error En algun Codigo de Obtener uno'}) 
//     else res.status(200).json({mensaje:'Datos Encontrados:',Data: getOnePerson})
// }
// Ctll.SavePerson = async (req, res) => {
//     const Id_Person = await PersonModelo.findOne({ Id_Person: req.body.Id_Person })
//     if (Id_Person == null) {
//         const savePerson = new PersonModelo(req.body)
//         await savePerson.save()
//         res.status(200).json({mensaje:'Dato Creada:', Data:savePerson})
//     } else res.status(404).json({mensaje:'Error En algun Codigo de Guardado'})
// }
// Ctll.PutPerson = async (req, res) => {
//     const putPerson = await PersonModelo.findOneAndUpdate({ Id_Person: req.params.idSa }, req.body)
//     if (putPerson != null) res.status(200).json({mensaje:'Datos Actualizados:'})
//     else res.status(404).json({mensaje:'Error En algun Codigo de Actualizar'})
// }
// Ctll.DelPerson = async (req, res) => {
//     const delPerson = await PersonModelo.findOneAndDelete({ Id_Person: req.params.idSa })
//     if (delPerson != null) res.status(200).json({mensaje:'Datos Eliminados:',Data: delPerson})
//     else res.status(404).json({mensaje:'Error En algun Codigo de Eliminado'})
// }
module.exports = Ctll;