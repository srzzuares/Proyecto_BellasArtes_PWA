const { Router } = require('express');
const RooT = Router();
const Ctll = require('../controllers/pinturasController.js');
//const {valpinturasCreate, valpinturasPut} = require('../Utils/pinturasaVal.js');


/**
 *  @swagger
 *  components:
 *      schemas:
 *       Pintura:
 *        type: object
 *        properties:
 *         ID:
 *          type: Number
 *          description: Identificador de Pintura.
 *         Nombre_Obra:
 *          type: String
 *          description: Nombre de la Pintura.
 *         Imagen:
 *          type: String
 *          description: Link de la imagen.
 *         Descripcion:
 *          type: Number
 *          description: Breve descrcipcion de la imagen.
 *         Artista_ID:
 *          type: Number
 *          description: identificacdor del artista con tabla Artistas.
 *         Fecha_Creacion:
 *          type: Number
 *          Tecnica: Fecha de creacion de la obra de arte.
 *         Tecnica:
 *          type: String
 *          description: Tipo de tecnica Oleo, Acrilico...
 *         Genero_ID:
 *          type: Number
 *          description: identificacdor del genero de la Pintura.
 *         Costo:
 *          type: Number
 *          description: Costo de la pintura.
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
 *         Nombre_Obra: Mi Soledad
 *         Imagen: ""
 *         Descripcion: Entre la Soledad Muere
 *         Artista_ID: 2
 *         Fecha_Creacion: 2023-10-16T00:20:18.205Z
 *         Tecnica: Oleo
 *         Genero_ID: 2
 *         Costo: 1222.22
 *         Estatus: true
 */

/**
 *  @swagger
 *  /pinturas/:
 *  get:
 *      summary: Get All Pintura
 *      tags: [Pintura]
 *      responses:
 *          200:
 *              description: Obtiene todos los Pinturas creados
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Pintura'
 */
RooT.get('/pinturas/', Ctll.GetPintura)

/**
 *  @swagger
 *  /pinturas/{ID}:
 *  get:
 *      tags: [Pintura]
 *      summary: Get one Pintura by ID
 *      parameters:
 *          - in: path
 *            name: ID
 *            required: true
 *            schema:
 *                type: string
 *            description: Identificacion de Pintura
 *      responses:
 *          200:
 *              description: OK
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Pintura'
 */
RooT.get('/pinturas/:ID', Ctll.GetOnePintura)

/**
 * @swagger
 * /pinturas/create:
 *   post:
 *     tags: [Pintura]
 *     summary: Create a new Pintura
 *     description: Crea una nueva Pintura.
 *     requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Pintura'
 *     responses:
 *       200:
 *          description: Success created 
 */
RooT.post('/pinturas/create', Ctll.SavePintura)

/**
 *  @swagger
 *  /pinturas/put/{ID}:
 *  put:
 *      summary: Put one Pintura
 *      tags: [Pintura]
 *      parameters:
 *          - in: path
 *            name: ID
 *            required: true
 *            schema:
 *                type: string
 *            description: Identificacion de la Pintura
 *      requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Pintura'
 *      responses:
 *          200:
 *              description: Pintura actualizada
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Pintura'
 *          404:
 *              description: Identificacion no encontrada
 */
RooT.put('/pinturas/put/:ID', Ctll.PutPintura)

/**
 *  @swagger
 *  /pinturas/del/{ID}:
 *  delete:
 *      summary: Delete status of Pintura
 *      tags: [Pintura]
 *      parameters:
 *          - in: path
 *            name: ID
 *            required: true
 *            schema:
 *                type: string
 *            description: Identificacion de la Pintura
 *      responses:
 *          200:
 *              description: Pintura Desactivado/Activo
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Pintura'
 *          400:
 *              description: Identificacion no encontrada
 */
RooT.delete('/pinturas/del/:ID', Ctll.DelPintura)
module.exports = RooT;