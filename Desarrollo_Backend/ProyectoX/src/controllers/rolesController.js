const Ctll = {}
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const date = new Date();

Ctll.GetRoles = async (req, res) => {
    const resultados = await prisma.tbc_roles.findMany();
    res.status(200).json({
        success: true,
        data: resultados,
    });
}

Ctll.GetOneRoles = async (req, res) => {
    const ID = Number(req.params.ID);
    const Id_Roles = await prisma.tbc_roles.findUnique({ 
        where: { ID },
    });
    
    if (!Id_Roles) {
        res.status(404).json({
            success: false,
            message: "Rol no encontrado",
        });
    }else {
        res.status(200).json({
            success: true,
            data: Id_Roles,
        });
    }
    
}

Ctll.SaveRoles = async (req, res) => {
    const { ID, Nombre, Descripcion } = req.body;
    const ifRolesThis = await prisma.tbc_roles.findUnique({ where: { ID } })
    if(!ifRolesThis){
        const send = await prisma.tbc_roles.create({
            data: {
                Nombre,
                Descripcion
            }
        });
        res.status(200).json({
            menssage: "Creacion completa",
            success: true,
            data: send
        })
    }else res.status(404).json({mensaje:'Error, el ID ya esta en uso.'})
    
}

Ctll.PutRoles = async (req, res) => {
    const [ID, Fecha_Actualizacion] = [Number(req.params.ID), date];
    const { Nombre, Descripcion, Estatus } = req.body;
    const ifRolesThis = await prisma.tbc_roles.findUnique({ where: { ID } })
    if(!ifRolesThis){
        res.status(404).json({
            success: false,
            message: "Rol no encontrado o ID Incorrecto",
        });
    }else{
        const put = await prisma.tbc_roles.update({
            where: { ID },
            data: {
                Nombre,
                Descripcion,
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

Ctll.DelRoles = async (req, res) => {
    const [ ID, Estatus, Fecha_Actualizacion ] = [Number(req.params.ID) , false, date]
    const ifRolesThis = await prisma.tbc_roles.findUnique({ where: { ID } })
    if(ifRolesThis){
        const delEst = await prisma.tbc_roles.update({
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
            message: "Rol no encontrada o ID Incorrecto",
        });
    }
}

module.exports = Ctll;