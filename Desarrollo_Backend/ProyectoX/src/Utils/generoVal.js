const {body} = require('express-validator');

const valGeneroCreate = () => {
    return [
        body('ID')
            .not()
            .isEmpty()
            .withMessage('¿Hola?, Esta Vacio este campo')
            .isInt()
            .withMessage('¿Hola?, Es de tipo numerico.')
            .isLength({min:1,max:6})
            .withMessage('Solo es de 6 Caracteres.'),
        body('Nombre_Genero')
            .trim()
            .not()
            .isEmpty()
            .withMessage('¿Hola?, Esta Vacio este campo')
            .isString()
            .withMessage('¿Hola?, Es de tipo Texto.')
            .isLength({min: 4, max:30})
            .withMessage('Solo es mayor a 4 y menor que 30 Caracteres.'),
        body('Genero_Padre')
            .trim()
            .not()
            .isEmpty()
            .withMessage('¿Hola?, Esta Vacio este campo')
            .isInt()
            .withMessage('¿Hola?, Es de tipo Numerico.'),
    ]
}
const valGeneroPut = () => {
    return [
        body('ID')
            .not()
            .isEmpty()
            .withMessage('¿Hola?, Esta Vacio este campo')
            .isInt()
            .withMessage('¿Hola?, Es de tipo numerico.')
            .isLength({min:1,max:6})
            .withMessage('Solo es de 6 Caracteres.'),
        body('Nombre_Genero')
            .trim()
            .not()
            .isEmpty()
            .withMessage('¿Hola?, Esta Vacio este campo')
            .isString()
            .withMessage('¿Hola?, Es de tipo Texto.')
            .isLength({min: 4, max:30})
            .withMessage('Solo es mayor a 4 y menor que 30 Caracteres.'),
        body('Genero_Padre')
            .trim()
            .not()
            .isEmpty()
            .withMessage('¿Hola?, Esta Vacio este campo')
            .isInt()
            .withMessage('¿Hola?, Es de tipo Numerico.'),
        body('Estatus')
            .trim()
            .not()
            .isEmpty()
            .withMessage('¿Hola?, Esta Vacio este campo.')
            .isBoolean()
            .withMessage('Debe ser de tipo booleano. true o false'),
    ]
}

module.exports = {
    valGeneroCreate,
    valGeneroPut
};