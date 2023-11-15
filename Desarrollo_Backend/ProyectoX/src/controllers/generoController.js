const Ctll = {}
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const date = new Date();

Ctll.GetGenero = async (req, res) => {
    const resultados = await prisma.tbc_genero.findMany();
    res.status(200).json({
        success: true,
        data: resultados,
    });
}

Ctll.GetOneGenero = async (req, res) => {
    const ID = Number(req.params.ID);
    const Id_Genero = await prisma.tbc_genero.findUnique({ 
        where: { ID },
    });
    
    if (!Id_Genero) {
        res.status(404).json({
            success: false,
            message: "Genero no encontrado",
        });
    }else {
        res.status(200).json({
            success: true,
            data: Id_Genero,
        });
    }
    
}

Ctll.SaveGenero = async (req, res) => {
    const { ID, Nombre_Genero, Genero_Padre } = req.body;
    const ifGeneroThis = await prisma.tbc_genero.findUnique({ where: { ID } })
    if(!ifGeneroThis){
        if(Genero_Padre != 0){
            const send = await prisma.tbc_genero.create({
                data: {
                    Nombre_Genero,
                    Genero_Padre
                }
            });
            res.status(200).json({
                menssage: "Creacion completa",
                success: true,
                data: send
            })
        }else{
            const send = await prisma.tbc_genero.create({
                data: {
                    Nombre_Genero
                }
            });
            res.status(200).json({
                menssage: "Creacion completa.",
                success: true,
                data: send
            })
        }
    }else res.status(404).json({mensaje:'Error, el ID ya esta en uso.'})
    
}

Ctll.PutGenero = async (req, res) => {
    const [ID, Fecha_Actualizacion] = [Number(req.params.ID), date];
    const { Nombre_Genero, Genero_Padre, Estatus } = req.body;
    const ifGeneroThis = await prisma.tbc_genero.findUnique({ where: { ID } })
    if(!ifGeneroThis){
        res.status(404).json({
            success: false,
            message: "Genero no encontrado o ID Incorrecto",
        });
    }else{
        if(Genero_Padre != 0){
            const put = await prisma.tbc_genero.update({
                where: { ID },
                data: {
                    Nombre_Genero,
                    Genero_Padre,
                    Estatus,
                    Fecha_Actualizacion
                }
            });
            res.status(200).json({
                menssage: "Actualizacion completa",
                success: true,
                data: put
            });
        }else{
            const put = await prisma.tbc_genero.update({
                where: { ID },
                data: {
                    Nombre_Genero,
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
}

Ctll.DelGenero = async (req, res) => {
    const [ ID, Estatus, Fecha_Actualizacion ] = [Number(req.params.ID) , false, date]
    const ifGeneroThis = await prisma.tbc_genero.findUnique({ where: { ID } })
    if(ifGeneroThis){
        if(ifGeneroThis.Estatus){
            const delEst = await prisma.tbc_genero.update({
                where: { ID },
                data: {
                    Estatus,
                    Fecha_Actualizacion
                }
            });
            res.status(200).json({
                menssage: "Desactivado completado",
                success: true,
                data: delEst
            });
        }
        else{
            const delActEst = await prisma.tbc_genero.update({
                where: { ID },
                data: {
                    Estatus:true,
                    Fecha_Actualizacion
                }
            });
            res.status(200).json({
                menssage: "Activado completado",
                success: true,
                data: delActEst
            });
        }
    }else{
        res.status(404).json({
            success: false,
            message: "Genero no encontrada o ID Incorrecto",
        });
    }
}

module.exports = Ctll;