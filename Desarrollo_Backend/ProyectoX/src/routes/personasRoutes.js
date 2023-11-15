const { Router } = require('express');
const RooT = Router();
const Ctll = require('../controllers/personasControllers.js');
const {valPersonCreate, valPersonPut} = require('../Utils/personaVal.js');

/**
 *  @swagger
 *  components:
 *      schemas:
 *       Persona:
 *        type: object
 *        properties:
 *         ID:
 *          type: Number
 *          description: Identificador de Persona.
 *         Nombre:
 *          type: String
 *          description: Nombre de la persona.
 *         P_Apellido:
 *          type: String
 *          description: Primer apellido de la persona.
 *         S_Apellido:
 *          type: String
 *          description: Segundo apellido de la persona.
 *         Nacimiento:
 *          type: String
 *          description: Fecha de nacimiento de la persona.
 *         Genero:
 *          type: String
 *          description: Tipo de genero de la persona.
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
 *         ID: 1
 *         Nombre: Soledad
 *         P_Apellido: Martinez
 *         S_Apellido: Guzman
 *         Nacimiento: 2001-03-20T00:00:00.000Z
 *         Genero: M
 *         Estatus: true
 *         Fecha_Registro: 2023/07/12 03:04:29
 *         Fecha_Actualizacion: 2023/07/12 03:04:29
 */

/**
 *  @swagger
 *  /person/:
 *  get:
 *      summary: Get All Personas
 *      tags: [Personas]
 *      responses:
 *          200:
 *              description: Obtiene todos las Personas creadas
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Persona'
 */
RooT.get('/person/', Ctll.GetPerson)

/**
 *  @swagger
 *  /person/{ID}:
 *  get:
 *      tags: [Personas]
 *      summary: Get one Persona by ID
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
 *                              $ref: '#/components/schemas/Persona'
 */
RooT.get('/person/:ID', Ctll.GetOnePerson)

/**
 * @swagger
 * /person/create:
 *   post:
 *     tags: [Personas]
 *     summary: Create a new persona
 *     description: Crea una nueva Persona.
 *     requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Persona'
 *     responses:
 *       200:
 *          description: Success created 
 */
RooT.post('/person/create', valPersonCreate(), Ctll.SavePerson)

/**
 *  @swagger
 *  /person/put/{ID}:
 *  put:
 *      summary: Put one Persona
 *      tags: [Personas]
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
 *                          $ref: '#/components/schemas/Persona'
 *      responses:
 *          200:
 *              description: Persona actualizada
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Persona'
 *          404:
 *              description: Identificacion no encontrada
 */
RooT.put('/person/put/:ID', Ctll.PutPerson)

/**
 *  @swagger
 *  /person/del/{ID}:
 *  delete:
 *      summary: Delete status of persona
 *      tags: [Personas]
 *      parameters:
 *          - in: path
 *            name: ID
 *            required: true
 *            schema:
 *                type: string
 *            description: Identificacion de la persona
 *      responses:
 *          200:
 *              description: Persona Desactivada/Activada
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Artista'
 *          400:
 *              description: Identificacion no encontrada
 */
RooT.delete('/person/del/:ID', Ctll.DelPerson)
module.exports = RooT;