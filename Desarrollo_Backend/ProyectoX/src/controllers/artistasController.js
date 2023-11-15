const Ctll = {}
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const date = new Date();

Ctll.GetArtista = async (req, res) => {
    const resultados = await prisma.tbb_artistas.findMany();
    res.status(200).json({
        success: true,
        data: resultados,
    });
}

Ctll.GetOneArtista = async (req, res) => {
    const Persona_ID = Number(req.params.ID);
    const Id_Artista = await prisma.tbb_artistas.findUnique({ 
        where: { Persona_ID },
    });
    
    if (!Id_Artista) {
        res.status(404).json({
            success: false,
            message: "Artista no encontrado",
        });
    }else {
        res.status(200).json({
            success: true,
            data: Id_Artista,
        });
    }
    
}

Ctll.SaveArtista = async (req, res) => {
    const { Persona_ID, Descripcion_Blog, Imagen } = req.body;
    const ifArtistaThis = await prisma.tbb_artistas.findUnique({ where: { Persona_ID } })
    if(!ifArtistaThis){
        const send = await prisma.tbb_artistas.create({
            data: {
                Descripcion_Blog,
                Imagen
            }
        });
        res.status(200).json({
            menssage: "Creacion completa",
            success: true,
            data: send
        })
    }else res.status(404).json({mensaje:'Error, el ID ya esta en uso.'})
    
}

Ctll.PutArtista = async (req, res) => {
    const [Persona_ID, Fecha_Actualizacion] = [Number(req.params.ID), date];
    const { Descripcion_Blog, Imagen, Estatus } = req.body;
    const ifArtistaThis = await prisma.tbb_artistas.findUnique({ where: { Persona_ID } })
    if(!ifArtistaThis){
        res.status(404).json({
            success: false,
            message: "Artista no encontrado o ID Incorrecto",
        });
    }else{
        const put = await prisma.tbb_artistas.update({
            where: { Persona_ID },
            data: {
                Descripcion_Blog,
                Imagen,
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

Ctll.DelArtista = async (req, res) => {
    const [ Persona_ID, Estatus, Fecha_Actualizacion ] = [Number(req.params.ID) , false, date]
    const ifArtistaThis = await prisma.tbb_artistas.findUnique({ where: { Persona_ID } })
    if(ifArtistaThis){
        if(ifArtistaThis.Estatus){
            const delEst = await prisma.tbb_artistas.update({
                where: { Persona_ID },
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
        }
        else {
            const delActEst = await prisma.tbb_artistas.update({
                where: { Persona_ID },
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
            message: "Artista no encontrado o ID Incorrecto",
        });
    }
}

module.exports = Ctll;