// Require Packages
const express = require('express');
const APP = express();
const cors = require('cors');
const path = require('path');
//Swagger
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
require('dotenv').config();

//Object Swagger
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Api-Node JS, Prisma y Swagger",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:5999"
            }
        ]
    },
    apis: [
        `${path.join(__dirname, '../routes/artistasRoutes.js')}`
    ]
}

//Midleware
APP.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))
APP.use(cors());
APP.use(express.json());
APP.use(express.urlencoded({extended:false}));
APP.use(require('../routes/personasRoutes.js'));
APP.use(require('../routes/generoRoutes.js'));
APP.use(require('../routes/rolesRoutes.js'));
APP.use(require('../routes/usuariosRoutes.js'));
APP.use(require('../routes/artistasRoutes.js'));
APP.use(require('../routes/pinturasRoutes.js'));
APP.use(require('../routes/comprasRoutes.js'));

// Settings
APP.set('PORT', process.env.PORT || 5555);
APP.set('RSv', () => console.log(`Listening on port http://localhost:${APP.get('PORT')}`));

// Export
module.exports = APP;