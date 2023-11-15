const Ctll = {}
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt')
const salt = 1;
const date = new Date();

Ctll.GetUsuario = async (req, res) => {
    const resultados = await prisma.tbb_usuarios.findMany();
    res.status(200).json({
        success: true,
        data: resultados,
    });
}

Ctll.GetOneUsuario = async (req, res) => {
    const Persona_ID = Number(req.params.ID);
    const Id_Usuario = await prisma.tbb_usuarios.findUnique({ 
        where: { Persona_ID },
    });
    
    if (!Id_Usuario) {
        res.status(404).json({
            success: false,
            message: "Usuario no encontrado",
        });
    }else {
        res.status(200).json({
            success: true,
            data: Id_Usuario,
        });
    }
    
}

Ctll.SaveUsuario = async (req, res) => {
    const { Persona_ID, Nombre_Usuario, Correo, Contrasena, Rol_ID } = req.body;
    const ifUsuarioThis = await prisma.tbb_usuarios.findUnique({ where: { Persona_ID } })
    if(!ifUsuarioThis){
        bcrypt.hash(Contrasena.toString(), salt,async (err,hash)=>{
            if(err) {res.status(404).json({success: false, message: "Usuario no encontrado",});}
            const send = await prisma.tbb_usuarios.create({
                data: {
                    Persona_ID,
                    Nombre_Usuario,
                    Correo,
                    Contrasena: hash,
                    Rol_ID,
                }
            });
            res.status(200).json({
                menssage: "Creacion completa",
                success: true,
                data: send
            })
            
        })
    }else res.status(404).json({mensaje:'Error, el ID ya esta en uso.'})
    
}

Ctll.PutUsuario = async (req, res) => {
    const [Persona_ID, Fecha_Actualizacion] = [Number(req.params.ID), date];
    const { Nombre_Usuario, Correo, Contrasena, Rol_ID, Estatus } = req.body;
    const ifUsuarioThis = await prisma.tbb_usuarios.findUnique({ where: { Persona_ID } })
    if(!ifUsuarioThis){
        res.status(404).json({
            success: false,
            message: "Usuario no encontrado o ID Incorrecto",
        });
    }else{
        bcrypt.hash(Contrasena.toString(), salt,async (err,hash)=>{
            if(err) {res.status(404).json({success: false, message: "Usuario no encontrado",});}
            const put = await prisma.tbb_usuarios.update({
                where: { Persona_ID },
                data: {
                    Nombre_Usuario,
                    Correo,
                    Contrasena: hash,
                    Rol_ID,
                    Estatus,
                    Fecha_Actualizacion
                }
            });
            res.status(200).json({
                menssage: "Actualizacion completa",
                success: true,
                data: put
            });
        })
    }    
}

Ctll.DelUsuario = async (req, res) => {
    const [ Persona_ID, Estatus, Fecha_Actualizacion ] = [Number(req.params.ID) , false, date]
    const ifUsuarioThis = await prisma.tbb_usuarios.findUnique({ where: { Persona_ID } })
    if(ifUsuarioThis){
        if(ifUsuarioThis.Estatus){
            const delEst = await prisma.tbb_usuarios.update({
                where: { Persona_ID },
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
        }else{
            const delEst = await prisma.tbb_usuarios.update({
                where: { Persona_ID },
                data: {
                    Estatus:true,
                    Fecha_Actualizacion
                }
            });
            res.status(200).json({
                menssage: "Activado completado",
                success: true,
                data: delEst
            });
        }
    }else{
        res.status(404).json({
            success: false,
            message: "Usuario no encontrada o ID Incorrecto",
        });
    }
}

module.exports = Ctll;