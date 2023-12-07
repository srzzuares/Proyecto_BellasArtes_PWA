const Ctll = {};
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

Ctll.GetPintura = async (req, res) => {
    try {
        const resultados = await prisma.tbb_pinturas.findMany();
        res.status(200).json({
            success: true,
            data: resultados,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error interno del servidor",
        });
    }
};

Ctll.GetOnePintura = async (req, res) => {
    try {
        const ID = Number(req.params.ID);
        const pintura = await prisma.tbb_pinturas.findUnique({ where: { ID } });

        if (!pintura) {
            res.status(404).json({
                success: false,
                message: "Pintura no encontrada",
            });
        } else {
            res.status(200).json({
                success: true,
                data: pintura,
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error interno del servidor",
        });
    }
};

Ctll.SavePintura = async (req, res) => {
    try {
        const { ID, Nombre_Obra, Imagen, Descripcion, Artista_ID, Fecha_Creacion, Tecnica, Genero_ID, Costo } = req.body;
        const pinturaExistente = await prisma.tbb_pinturas.findUnique({ where: { ID } });

        if (!pinturaExistente) {
            const send = await prisma.tbb_pinturas.create({
                data: {
                    Nombre_Obra,
                    Imagen,
                    Descripcion,
                    Artista_ID,
                    Fecha_Creacion,
                    Tecnica,
                    Genero_ID,
                    Costo,
                    Fecha_Actualizacion: new Date(),
                },
            });

            res.status(200).json({
                message: "Creación completa",
                success: true,
                data: send,
            });
        } else {
            res.status(404).json({ message: 'Error, el ID ya está en uso.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error interno del servidor",
        });
    }
};

Ctll.PutPintura = async (req, res) => {
    try {
        const ID = Number(req.params.ID);
        const { Nombre_Obra, Imagen, Descripcion, Artista_ID, Fecha_Creacion, Tecnica, Genero_ID, Costo, Estatus } = req.body;
        const pinturaExistente = await prisma.tbb_pinturas.findUnique({ where: { ID } });

        if (!pinturaExistente) {
            res.status(404).json({
                success: false,
                message: "Pintura no encontrada o ID incorrecto",
            });
        } else {
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
                    Fecha_Actualizacion: new Date(),
                },
            });

            res.status(200).json({
                message: "Actualización completa",
                success: true,
                data: put,
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error interno del servidor",
        });
    }
};

Ctll.DelPintura = async (req, res) => {
    try {
        const ID = Number(req.params.ID);
        const pinturaExistente = await prisma.tbb_pinturas.findUnique({ where: { ID } });

        if (pinturaExistente) {
            const { Estatus } = pinturaExistente;

            const result = await prisma.tbb_pinturas.update({
                where: { ID },
                data: {
                    Estatus: !Estatus,
                    Fecha_Actualizacion: new Date(),
                },
            });

            const actionMessage = Estatus ? "Desactivado" : "Activado";

            res.status(200).json({
                message: `${actionMessage} completado`,
                success: true,
                data: result,
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Pintura no encontrada o ID incorrecto",
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error interno del servidor",
        });
    }
};

module.exports = Ctll;
