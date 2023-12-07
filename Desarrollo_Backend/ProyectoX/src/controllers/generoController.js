const Ctll = {};
const { PrismaClient, DateTime } = require('@prisma/client');
const prisma = new PrismaClient();
const date = new Date();

Ctll.GetGenero = async (req, res) => {
    try {
        const resultados = await prisma.tbc_genero.findMany();
        res.status(200).json({
            success: true,
            data: resultados,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener los géneros.',
            error: error.message,
        });
    }
};

Ctll.GetOneGenero = async (req, res) => {
    try {
        const ID = Number(req.params.ID);
        const Id_Genero = await prisma.tbc_genero.findUnique({
            where: { ID },
        });

        if (!Id_Genero) {
            res.status(404).json({
                success: false,
                message: 'Género no encontrado.',
            });
        } else {
            res.status(200).json({
                success: true,
                data: Id_Genero,
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener el género.',
            error: error.message,
        });
    }
};

Ctll.SaveGenero = async (req, res) => {
    try {
        const { ID, Nombre_Genero, Genero_Padre } = req.body;
        const ifGeneroThis = await prisma.tbc_genero.findUnique({ where: { ID } });

        if (!ifGeneroThis) {
            const data = {
                Nombre_Genero,
                Genero_Padre: Genero_Padre !== 0 ? Genero_Padre : undefined,
                Fecha_Actualizacion: date,
            };

            const send = await prisma.tbc_genero.create({
                data,
            });

            res.status(200).json({
                message: 'Creación completa',
                success: true,
                data: send,
            });
        } else {
            res.status(404).json({ mensaje: 'Error, el ID ya está en uso.' });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al guardar el género.',
            error: error.message,
        });
    }
};

Ctll.PutGenero = async (req, res) => {
    try {
        const ID = Number(req.params.ID);
        const { Nombre_Genero, Genero_Padre, Estatus } = req.body;
        const ifGeneroThis = await prisma.tbc_genero.findUnique({ where: { ID } });

        if (!ifGeneroThis) {
            res.status(404).json({
                success: false,
                message: 'Género no encontrado o ID incorrecto',
            });
        } else {
            const data = {
                Nombre_Genero,
                Genero_Padre: Genero_Padre !== 0 ? Genero_Padre : undefined,
                Estatus,
                Fecha_Actualizacion: date,
            };

            const put = await prisma.tbc_genero.update({
                where: { ID },
                data,
            });

            res.status(200).json({
                message: 'Actualización completa',
                success: true,
                data: put,
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al actualizar el género.',
            error: error.message,
        });
    }
};

Ctll.DelGenero = async (req, res) => {
    try {
        const ID = Number(req.params.ID);
        const ifGeneroThis = await prisma.tbc_genero.findUnique({ where: { ID } });

        if (ifGeneroThis) {
            const { Estatus } = ifGeneroThis;
            const data = {
                Estatus: !Estatus,
                Fecha_Actualizacion: date,
            };

            const delEst = await prisma.tbc_genero.update({
                where: { ID },
                data,
            });

            res.status(200).json({
                message: Estatus ? 'Desactivado completado' : 'Activado completado',
                success: true,
                data: delEst,
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'Género no encontrado o ID incorrecto',
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al eliminar el género.',
            error: error.message,
        });
    }
};

module.exports = Ctll;
