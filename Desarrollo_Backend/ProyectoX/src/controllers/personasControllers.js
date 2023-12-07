const Ctll = {};
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

Ctll.GetPerson = async (req, res) => {
    try {
        const resultados = await prisma.tbb_personas.findMany();
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

Ctll.GetOnePerson = async (req, res) => {
    try {
        const ID = Number(req.params.ID);
        const Id_Person = await prisma.tbb_personas.findUnique({
            where: {
                ID: ID,
            },
        });

        if (!Id_Person) {
            res.status(404).json({
                success: false,
                message: "Persona no encontrada",
            });
        } else {
            res.status(200).json({
                success: true,
                data: Id_Person,
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error interno del servidor",
        });
    }
};Ctll.SavePerson = async (req, res) => {
    try {
        const { Nombre, P_Apellido, S_Apellido, Nacimiento, Genero } = req.body;

        // Verificar si los campos requeridos están presentes
        if (!Nombre || !P_Apellido || !S_Apellido || !Nacimiento || !Genero) {
            return res.status(400).json({ message: 'Error, campos incompletos.' });
        }

        // Crear una nueva persona
        const send = await prisma.tbb_personas.create({
            data: {
                Nombre,
                P_Apellido,
                S_Apellido,
                Nacimiento,
                Genero,
                Fecha_Actualizacion: new Date(),
            },
        });

        res.status(201).json({
            message: "Creación completa",
            success: true,
            data: send,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error interno del servidor",
        });
    }
};


Ctll.PutPerson = async (req, res) => {
    try {
        const { ID } = req.params;
        const { Nombre, P_Apellido, S_Apellido, Nacimiento, Genero, Estatus } = req.body;
        const Fecha_Actualizacion = prisma.now();
        const ifPersonThis = await prisma.tbb_personas.findUnique({ where: { ID } });

        if (!ifPersonThis) {
            res.status(404).json({
                success: false,
                message: "Persona no encontrada o ID incorrecto",
            });
        } else {
            const put = await prisma.tbb_personas.update({
                where: { ID },
                data: {
                    Nombre,
                    P_Apellido,
                    S_Apellido,
                    Nacimiento,
                    Genero,
                    Estatus,
                    Fecha_Actualizacion: { set: Fecha_Actualizacion },
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

Ctll.DelPerson = async (req, res) => {
    try {
        const { ID } = req.params;
        const Estatus = false;
        const Fecha_Actualizacion = prisma.now();
        const ifPersonThis = await prisma.tbb_personas.findUnique({ where: { ID } });

        if (ifPersonThis) {
            if (ifPersonThis.Estatus) {
                const delEst = await prisma.tbb_personas.update({
                    where: { ID },
                    data: {
                        Estatus,
                        Fecha_Actualizacion: { set: Fecha_Actualizacion },
                    },
                });

                res.status(200).json({
                    message: "Desactivado completado",
                    success: true,
                    data: delEst,
                });
            } else {
                const delActEst = await prisma.tbb_personas.update({
                    where: { ID },
                    data: {
                        Estatus: true,
                        Fecha_Actualizacion: { set: Fecha_Actualizacion },
                    },
                });

                res.status(200).json({
                    message: "Activado completado",
                    success: true,
                    data: delActEst,
                });
            }
        } else {
            res.status(404).json({
                success: false,
                message: "Persona no encontrada o ID incorrecto",
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
