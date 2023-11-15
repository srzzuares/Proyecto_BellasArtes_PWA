const Ctll = {}
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const date = new Date();

Ctll.GetPerson = async (req, res) => {
    const resultados = await prisma.tbb_personas.findMany();
    res.status(200).json({
        success: true,
        data: resultados,
    });
}

Ctll.GetOnePerson = async (req, res) => {
    const ID = Number(req.params.ID);
    const Id_Person = await prisma.tbb_personas.findUnique({ 
        where: { ID },
    });
    
    if (!Id_Person) {
        res.status(404).json({
            success: false,
            message: "Persona no encontrada",
        });
    }else {
        res.status(200).json({
            success: true,
            data: Id_Person,
        });
    }
    
}

Ctll.SavePerson = async (req, res) => {
    const { ID, Nombre, P_Apellido, S_Apellido, Nacimiento, Genero } = req.body;
    const ifPersonThis = await prisma.tbb_personas.findUnique({ where: { ID } })
    if(!ifPersonThis){
        const send = await prisma.tbb_personas.create({
            data: {
                Nombre,
                P_Apellido,
                S_Apellido,
                Nacimiento,
                Genero
            }
        });
        res.status(200).json({
            menssage: "Creacion completa",
            success: true,
            data: send
        })
    }else res.status(404).json({mensaje:'Error, el ID ya esta en uso.'})
    
}

Ctll.PutPerson = async (req, res) => {
    const [ID, Fecha_Actualizacion] = [Number(req.params.ID), date];
    const { Nombre, P_Apellido, S_Apellido, Nacimiento, Genero, Estatus } = req.body;
    const ifPersonThis = await prisma.tbb_personas.findUnique({ where: { ID } })
    if(!ifPersonThis){
        res.status(404).json({
            success: false,
            message: "Persona no encontrada o ID Incorrecto",
        });
    }else{
        const put = await prisma.tbb_personas.update({
            where: { ID },
            data: {
                Nombre,
                P_Apellido,
                S_Apellido,
                Nacimiento,
                Genero,
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

Ctll.DelPerson = async (req, res) => {
    const [ ID, Estatus, Fecha_Actualizacion ] = [Number(req.params.ID) , false, date]
    const ifPersonThis = await prisma.tbb_personas.findUnique({ where: { ID } })
    if(ifPersonThis){
        if(ifPersonThis.Estatus){
            const delEst = await prisma.tbb_personas.update({
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
        else {
            const delActEst = await prisma.tbb_personas.update({
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
            message: "Persona no encontrada o ID Incorrecto",
        });
    }
}

module.exports = Ctll;