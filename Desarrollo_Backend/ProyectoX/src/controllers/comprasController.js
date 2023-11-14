const Ctll = {}
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const date = new Date();

Ctll.GetCompras = async (req, res) => {
    const resultados = await prisma.tbb_compra.findMany();
    res.status(200).json({
        success: true,
        data: resultados,
    });
}

Ctll.GetOneCompras = async (req, res) => {
    const ID = Number(req.params.ID);
    const Id_Compras = await prisma.tbb_compra.findUnique({ 
        where: { ID },
    });
    
    if (!Id_Compras) {
        res.status(404).json({
            success: false,
            message: "Compra no encontrada",
        });
    }else {
        res.status(200).json({
            success: true,
            data: Id_Compras,
        });
    }
    
}

Ctll.SaveCompras = async (req, res) => {
    const { ID, Usuario_ID, Pintura_ID, Costo_Final, Descuento, Fecha_Venta } = req.body;
    const ifComprasThis = await prisma.tbb_compra.findUnique({ where: { ID } })
    if(!ifComprasThis){
        const send = await prisma.tbb_compra.create({
            data: {
                Usuario_ID,
                Pintura_ID,
                Costo_Final,
                Descuento,
                Fecha_Venta
            }
        });
        res.status(200).json({
            menssage: "Creacion completa",
            success: true,
            data: send
        })
    }else res.status(404).json({mensaje:'Error, el ID ya esta en uso.'})
    
}

Ctll.PutCompras = async (req, res) => {
    const [ID, Fecha_Actualizacion] = [Number(req.params.ID), date];
    const { Usuario_ID, Pintura_ID, Costo_Final, Descuento, Fecha_Venta } = req.body;
    const ifComprasThis = await prisma.tbb_compra.findUnique({ where: { ID } })
    if(!ifComprasThis){
        res.status(404).json({
            success: false,
            message: "Compras no encontrado o ID Incorrecto",
        });
    }else{
        const put = await prisma.tbb_compra.update({
            where: { ID },
            data: {
                Usuario_ID,
                Pintura_ID,
                Costo_Final,
                Descuento,
                Fecha_Venta
            }
        });
        res.status(200).json({
            menssage: "Actualizacion completa",
            success: true,
            data: put
        });
    }    
}

// Ctll.DelCompras = async (req, res) => {
//     const [ ID, Estatus, Fecha_Actualizacion ] = [Number(req.params.ID) , false, date]
//     const ifComprasThis = await prisma.tbb_compra.findUnique({ where: { ID } })
//     if(ifComprasThis){
//         const delEst = await prisma.tbb_compra.update({
//             where: { ID },
//             data: {
//                 Estatus,
//                 Fecha_Actualizacion
//             }
//         });
//         res.status(200).json({
//             menssage: "Eliminado completado",
//             success: true,
//             data: delEst
//         });
//     }else{
//         res.status(404).json({
//             success: false,
//             message: "Comprasa no encontrada o ID Incorrecto",
//         });
//     }
// }

module.exports = Ctll;