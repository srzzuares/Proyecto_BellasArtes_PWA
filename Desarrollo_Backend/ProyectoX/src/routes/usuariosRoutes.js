const { Router } = require('express');
const RooT = Router();
const Ctll = require('../controllers/usuariosController.js');
//const {valusuariosCreate, valusuariosPut} = require('../Utils/usuariosaVal.js');


/**
 *  @swagger
 *  components:
 *      schemas:
 *       Usuario:
 *        type: object
 *        properties:
 *         Persona_ID:
 *          type: Number
 *          description: Identificador de Usuario.
 *         Nombre_Usuario:
 *          type: String
 *          description: Nombre del Usuario.
 *         Correo:
 *          type: Number
 *          description: Correo del usuario.
 *         Contrasena:
 *          type: Number
 *          description: Contraseña del usuario.
 *         Rol_ID:
 *          type: Number
 *          description: identificacdor del rol id.
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
 *         - Persona_ID
 *        example:
 *         Persona_ID: 1
 *         Nombre_Usuario: Acciden
 *         Correo: 1234@gmail.com
 *         Contrasena:  1234
 *         Rol_ID: 1 
 *         Estatus: true
 *         Fecha_Registro: 2023/07/12 03:04:29
 *         Fecha_Actualizacion: 2023/07/12 03:04:29
 */

/**
 *  @swagger
 *  /usuarios/:
 *  get:
 *      summary: Get All Usuario
 *      tags: [Usuario]
 *      responses:
 *          200:
 *              description: Obtiene todos los Usuarios creados
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Usuario'
 */
RooT.get('/usuarios/', Ctll.GetUsuario)

/**
 *  @swagger
 *  /usuarios/{ID}:
 *  get:
 *      tags: [Usuario]
 *      summary: Get one Usuario by ID
 *      parameters:
 *          - in: path
 *            name: ID
 *            required: true
 *            schema:
 *                type: string
 *            description: Identificacion de Usuario
 *      responses:
 *          200:
 *              description: OK
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Usuario'
 */
RooT.get('/usuarios/:ID', Ctll.GetOneUsuario)

/**
 * @swagger
 * /usuarios/create:
 *   post:
 *     tags: [Usuario]
 *     summary: Create a new Usuario
 *     description: Crea un nuevo Usuario.
 *     requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *          description: Success created 
 */
RooT.post('/usuarios/create', Ctll.SaveUsuario)

/**
 *  @swagger
 *  /usuarios/put/{ID}:
 *  put:
 *      summary: Put one Usuario
 *      tags: [Usuario]
 *      parameters:
 *          - in: path
 *            name: ID
 *            required: true
 *            schema:
 *                type: string
 *            description: Identificacion del Usuario
 *      requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Usuario'
 *      responses:
 *          200:
 *              description: Usuario actualizado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Usuario'
 *          404:
 *              description: Identificacion no encontrada
 */
RooT.put('/usuarios/put/:ID', Ctll.PutUsuario)

/**
 *  @swagger
 *  /usuarios/del/{ID}:
 *  delete:
 *      summary: Delete status of Usuario
 *      tags: [Usuario]
 *      parameters:
 *          - in: path
 *            name: ID
 *            required: true
 *            schema:
 *                type: string
 *            description: Identificacion del Usuario
 *      responses:
 *          200:
 *              description: Usuario Desactivado/Activo
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Usuario'
 *          400:
 *              description: Identificacion no encontrada
 */
RooT.delete('/usuarios/del/:ID', Ctll.DelUsuario)
module.exports = RooT;