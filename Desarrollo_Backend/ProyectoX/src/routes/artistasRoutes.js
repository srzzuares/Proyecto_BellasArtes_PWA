const { Router } = require('express');
const RooT = Router();
const Ctll = require('../controllers/artistasController');
//const {valartistaCreate, valartistaPut} = require('../Utils/artistaaVal.js');

/**
 *  @swagger
 *  components:
 *      schemas:
 *       Artista:
 *        type: object
 *        properties:
 *         Persona_ID:
 *          type: Number
 *          description: Identificador de Artista relacionado a la tabla Personas.
 *         Descripcion_Blog:
 *          type: String
 *          description: Breve descripción del artista.
 *         Imagen:
 *          type: String
 *          description: Imagen del artista.
 *         Estatus:
 *          type: String
 *          description: Estado del Artista si esta activa o desactiva.
 *         Fecha_Registro:
 *          type: String
 *          description: Feha en que se registro el artista.
 *         Fecha_Actualizacion:
 *          type: Number
 *          description: Fecha en que se actulizo algun dato del artista.
 *        required:
 *         - Persona_ID
 *        example:
 *         Persona_ID: 1
 *         Descripcion_Blog: Entre la Soledad
 *         Imagen: ''
 *         Estatus: true
 *         Fecha_Registro: 2023/07/12 03:04:29
 *         Fecha_Actualizacion: 2023/07/12 03:04:29
 */

/**
 *  @swagger
 *  /artista/:
 *  get:
 *      summary: Get All Artistas
 *      tags: [Artista]
 *      responses:
 *          200:
 *              description: Obtiene todos los Artistas creados
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Artista'
 */
RooT.get('/artista/', Ctll.GetArtista)

/**
 *  @swagger
 *  /artista/{ID}:
 *  get:
 *      tags: [Artista]
 *      summary: Get one Artista by ID
 *      parameters:
 *          - in: path
 *            name: ID
 *            required: true
 *            schema:
 *                type: string
 *            description: Identificacion de Persona
 *      responses:
 *          200:
 *              description: OK
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Artista'
 */
RooT.get('/artista/:ID', Ctll.GetOneArtista)

/**
 * @swagger
 * /artista/create:
 *   post:
 *     tags: [Artista]
 *     summary: Create a new artista
 *     description: Crea un nuevo artista.
 *     requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Artista'
 *     responses:
 *       200:
 *          description: Success created 
 */
RooT.post('/artista/create', Ctll.SaveArtista)

/**
 *  @swagger
 *  /artista/put/{ID}:
 *  put:
 *      summary: Put one Artista
 *      tags: [Artista]
 *      parameters:
 *          - in: path
 *            name: ID
 *            required: true
 *            schema:
 *                type: string
 *            description: Identificacion de la persona
 *      requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Artista'
 *      responses:
 *          200:
 *              description: Artista actualizado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Artista'
 *          404:
 *              description: Identificacion no encontrada
 */
RooT.put('/artista/put/:ID', Ctll.PutArtista)

/**
 *  @swagger
 *  /artista/del/{ID}:
 *  delete:
 *      summary: Delete status of artista
 *      tags: [Artista]
 *      parameters:
 *          - in: path
 *            name: ID
 *            required: true
 *            schema:
 *                type: string
 *            description: Identificacion del artista
 *      responses:
 *          200:
 *              description: Artista Desactivado/Activo
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Artista'
 *          400:
 *              description: Identificacion no encontrada
 */
RooT.delete('/artista/del/:ID', Ctll.DelArtista)
module.exports = RooT;
