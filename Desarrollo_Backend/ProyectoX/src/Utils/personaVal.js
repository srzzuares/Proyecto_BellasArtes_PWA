const {body} = require('express-validator');

const valPersonCreate = () => {
    return [
        body('ID')
            .not()
            .isEmpty()
            .withMessage('¿Hola?, Esta Vacio este campo')
            .isInt()
            .withMessage('¿Hola?, Es de tipo numerico.')
            .isLength({min:1,max:6})
            .withMessage('Solo es de 6 Caracteres.'),
        body('Nombre')
            .trim()
            .not()
            .isEmpty()
            .withMessage('¿Hola?, Esta Vacio este campo')
            .isString()
            .withMessage('¿Hola?, Es de tipo Texto.')
            .isLength({min: 4, max:30})
            .withMessage('Solo es mayor a 4 y menor que 30 Caracteres.'),
        body('P_Apellido')
            .trim()
            .not()
            .isEmpty()
            .withMessage('¿Hola?, Esta Vacio este campo')
            .isString()
            .withMessage('¿Hola?, Es de tipo Texto.')
            .isLength({min: 4, max:30})
            .withMessage('Solo es mayor a 4 y menor que 30 Caracteres.'),
        body('S_Apellido')
            .trim()
            .not()
            .isEmpty()
            .isString()
            .withMessage('¿Hola?, Esta Vacio este campo y es de tipo Texto.')
            .isLength({min: 4, max:30})
            .withMessage('Solo es de 30 Caracteres.'),
        body('Nacimiento')
            .trim()
            .not()
            .isEmpty()
            .withMessage('¿Hola?, Esta Vacio este campo')
            .isISO8601()
            .isDate()
            .withMessage('¿Hola?, Este formato de fecha es incorrecta. Debe ser 2000-10.10'),
        body('Genero')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Hola?, Esta Vacio este campo.')
            .toUpperCase()
            .isIn(['M', 'F','N/A'])
            .withMessage('Seleccione una de ellas M (Masculino), F (Femenino), N/A (No Aplica).'),
    ]
}
const valPersonPut = () => {
    return [
        body('Nombre')
            .trim()
            .not()
            .isEmpty()
            .isString()
            .withMessage('¿Hola?, Esta Vacio este campo y es de tipo Texto.')
            .isLength({min: 4, max:30})
            .withMessage('Solo es de 30 Caracteres.'),
        body('P_Apellido')
            .trim()
            .not()
            .isEmpty()
            .isString()
            .withMessage('¿Hola?, Esta Vacio este campo y es de tipo Texto.')
            .isLength({min: 4, max:30})
            .withMessage('Solo es de 30 Caracteres.'),
        body('S_Apellido')
            .trim()
            .not()
            .isEmpty()
            .isString()
            .withMessage('¿Hola?, Esta Vacio este campo y es de tipo Texto.')
            .isLength({min: 4, max:30})
            .withMessage('Solo es de 30 Caracteres.'),
        body('Nacimiento')
            .trim()
            .not()
            .isEmpty()
            .withMessage('¿Hola?, Esta Vacio este campo')
            .isISO8601()
            .isDate()
            .withMessage('¿Hola?, Este formato de fecha es incorrecta. Debe ser 2000-10.10'),
        body('Genero')
            .trim()
            .not()
            .isEmpty()
            .withMessage('¿Hola?, Esta Vacio este campo.')
            .toLowerCase()
            .isIn(['M', 'F','N/A'])
            .withMessage('Seleccione una de ellas M (Masculino), F (Femenino), N/A (No Aplica).'),
        body('Estatus')
            .trim()
            .not()
            .isEmpty()
            .withMessage('¿Hola?, Esta Vacio este campo.')
            .isBoolean()
            .withMessage('Debe ser de tipo booleano. true or false'),
    ]
}

module.exports = {
    valPersonCreate,
    valPersonPut
};