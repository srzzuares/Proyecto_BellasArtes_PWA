const Ctll = {}
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const date = new Date();

Ctll.GetPintura = async (req, res) => {
    const resultados = await prisma.tbb_pinturas.findMany();
    res.status(200).json({
        success: true,
        data: resultados,
    });
}

Ctll.GetOnePintura = async (req, res) => {
    const ID = Number(req.params.ID);
    const Id_Pintura = await prisma.tbb_pinturas.findUnique({ 
        where: { ID },
    });
    
    if (!Id_Pintura) {
        res.status(404).json({
            success: false,
            message: "Pintura no encontrado",
        });
    }else {
        res.status(200).json({
            success: true,
            data: Id_Pintura,
        });
    }
    
}

Ctll.SavePintura = async (req, res) => {
    const { ID, Nombre_Obra, Imagen, Descripcion, Artista_ID, Fecha_Creacion, Tecnica, Genero_ID, Costo} = req.body;
    const ifPinturaThis = await prisma.tbb_pinturas.findUnique({ where: { ID } })
    if(!ifPinturaThis){
        const send = await prisma.tbb_pinturas.create({
            data: {
                Nombre_Obra,
                Imagen,
                Descripcion,
                Artista_ID,
                Fecha_Creacion,
                Tecnica,
                Genero_ID,
                Costo
            }
        });
        res.status(200).json({
            menssage: "Creacion completa",
            success: true,
            data: send
        })
    }else res.status(404).json({mensaje:'Error, el ID ya esta en uso.'})
    
}

Ctll.PutPintura = async (req, res) => {
    const [ID, Fecha_Actualizacion] = [Number(req.params.ID), date];
    const { Nombre_Obra, Imagen, Descripcion, Artista_ID, Fecha_Creacion, Tecnica, Genero_ID, Costo, Estatus } = req.body;
    const ifPinturaThis = await prisma.tbb_pinturas.findUnique({ where: { ID } })
    if(!ifPinturaThis){
        res.status(404).json({
            success: false,
            message: "Pintura no encontrado o ID Incorrecto",
        });
    }else{
        const put = await prisma.tbb_pinturas.update({
            where: { ID },
            data: {
                Nombre_Obra,
                Imagen,
                Descripcion,
                Artista_ID,
                Fecha_Creacion,
                Tecnica,
                Genero_ID,
                Costo,
                Estatus,
                Fecha_Actualizacion
            }
        });
        res.status(200).json({
            menssage: "Actualizacion completa",
            success: true,
            data: put
        });
    }    
}

Ctll.DelPintura = async (req, res) => {
    const [ ID, Estatus, Fecha_Actualizacion ] = [Number(req.params.ID) , false, date]
    const ifPinturaThis = await prisma.tbb_pinturas.findUnique({ where: { ID } })
    if(ifPinturaThis){
        const delEst = await prisma.tbb_pinturas.update({
            where: { ID },
            data: {
                Estatus,
                Fecha_Actualizacion
            }
        });
        res.status(200).json({
            menssage: "Eliminado completado",
            success: true,
            data: delEst
        });
    }else{
        res.status(404).json({
            success: false,
            message: "Pinturaa no encontrada o ID Incorrecto",
        });
    }
}

module.exports = Ctll;