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
    try {
        const { Persona_ID, Descripcion_Blog, Imagen } = req.body;
        const ifArtistaThis = await prisma.tbb_artistas.findUnique({ where: { Persona_ID } });

        if (!ifArtistaThis) {
            const send = await prisma.tbb_artistas.create({
                data: {
                    Descripcion_Blog: "Artista con una visión única que utiliza colores intensos para expresar emociones en constante cambio.\n",
                    Imagen: "https://images.ecestaticos.com/4p56t84xWYPuXzT3ZBiUlj54RAs=/70x0:2638x1809/992x700/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F317%2Fae0%2F456%2F317ae0456e63bd37ce7fa809d5955672.jpg\n",
                    Fecha_Actualizacion: date, // Corrección aquí
                },
            });

            res.status(200).json({
                message: "Creación completa",
                success: true,
                data: send,
            });
        } else {
            res.status(400).json({ message: 'Error, la Persona_ID ya está en uso.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error interno del servidor",
        });
    }
};


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