const { Router } = require('express');
const RooT = Router();
const Ctll = require('../controllers/generoController.js');
//const {valGeneroCreate, valGeneroPut} = require('../Utils/generoaVal.js');

/**
 *  @swagger
 *  components:
 *      schemas:
 *       Genero:
 *        type: object
 *        properties:
 *         ID:
 *          type: Number
 *          description: Identificador de genero.
 *         Nombre_Genero:
 *          type: String
 *          description: Nombre del genero.
 *         Genero_Padre:
 *          type: Number
 *          description: identificacdor del genero padre.
 *         Estatus:
 *          type: String
 *          description: Estado si esta activa o desactiva.
 *         Fecha_Registro:
 *          type: String
 *          description: Feha en que se registro.
 *         Fecha_Actualizacion:
 *          type: Number
 *          description: Fecha en que se actulizo algun dato.
 *        required:
 *         - ID
 *        example:
 *         ID: 1
 *         Nombre_Genero: accion
 *         Genero_Padre: 
 *         Estatus: true
 *         Fecha_Registro: 2023/07/12 03:04:29
 *         Fecha_Actualizacion: 2023/07/12 03:04:29
 */

/**
 *  @swagger
 *  /genero/:
 *  get:
 *      summary: Get All Genero
 *      tags: [Genero]
 *      responses:
 *          200:
 *              description: Obtiene todos los Generos creados
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Genero'
 */
RooT.get('/genero/', Ctll.GetGenero)

/**
 *  @swagger
 *  /genero/{ID}:
 *  get:
 *      tags: [Genero]
 *      summary: Get one Genero by ID
 *      parameters:
 *          - in: path
 *            name: ID
 *            required: true
 *            schema:
 *                type: string
 *            description: Identificacion de Genero
 *      responses:
 *          200:
 *              description: OK
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Genero'
 */
RooT.get('/genero/:ID', Ctll.GetOneGenero)

/**
 * @swagger
 * /genero/create:
 *   post:
 *     tags: [Genero]
 *     summary: Create a new Genero
 *     description: Crea un nuevo genero.
 *     requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Genero'
 *     responses:
 *       200:
 *          description: Success created 
 */
RooT.post('/genero/create', Ctll.SaveGenero)

/**
 *  @swagger
 *  /genero/put/{ID}:
 *  put:
 *      summary: Put one Genero
 *      tags: [Genero]
 *      parameters:
 *          - in: path
 *            name: ID
 *            required: true
 *            schema:
 *                type: string
 *            description: Identificacion del genero
 *      requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Genero'
 *      responses:
 *          200:
 *              description: Genero actualizado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Genero'
 *          404:
 *              description: Identificacion no encontrada
 */
RooT.put('/genero/put/:ID', Ctll.PutGenero)

/**
 *  @swagger
 *  /genero/del/{ID}:
 *  delete:
 *      summary: Delete status of Genero
 *      tags: [Genero]
 *      parameters:
 *          - in: path
 *            name: ID
 *            required: true
 *            schema:
 *                type: string
 *            description: Identificacion del Genero
 *      responses:
 *          200:
 *              description: Genero Desactivado/Activo
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Genero'
 *          400:
 *              description: Identificacion no encontrada
 */
RooT.delete('/genero/del/:ID', Ctll.DelGenero)
module.exports = RooT;