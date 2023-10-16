// Require Packages
const express = require('express');
const APP = express();
const cors = require('cors');
const path = require('path');
const swUI = require('swagger-ui-express');
const swJsD = require('swagger-jsdoc');
require('dotenv').config();

// Object Swagger
const swSp = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Api de Bellas Artes",
            version: "1.0.0"
        },
        servers: [
            {
                url : "http://localhost:5999"
            }
        ]
    },
    apis: [
        `${path.join(__dirname, '../routes/personasRoutes.js')}`
    ]
}

// Middlewares
APP.use('/api-doc', swUI.serve, swUI.setup(swJsD(swSp)));
APP.use(cors());
APP.use(express.json());
APP.use(express.urlencoded({extended:false}));
APP.use(require('../routes/personasRoutes.js'));
APP.use(require('../routes/generoRoutes.js'));
APP.use(require('../routes/rolesRoutes.js'));
APP.use(require('../routes/usuariosRoutes.js'));
APP.use(require('../routes/artistasRoutes.js'));
APP.use(require('../routes/pinturasRoutes.js'));

// Settings
APP.set('PORT', process.env.PORT || 5555);
APP.set('RSv', () => console.log(`Listening on port http://localhost:${APP.get('PORT')}`));

// Export
module.exports = APP;