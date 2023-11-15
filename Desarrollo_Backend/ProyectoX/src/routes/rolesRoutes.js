const { Router } = require('express');
const RooT = Router();
const Ctll = require('../controllers/rolesController.js');
//const {valrolesCreate, valrolesPut} = require('../Utils/rolesaVal.js');


/**
 *  @swagger
 *  components:
 *      schemas:
 *       Rol:
 *        type: object
 *        properties:
 *         ID:
 *          type: Number
 *          description: Identificador del rol.
 *         Nombre:
 *          type: String
 *          description: Nombre del rol.
 *         Descripcion:
 *          type: String
 *          description: Breve descripcion del rol.
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
 *         Nombre: Rol
 *         Descripcion: Nombre de rol
 *         Estatus: true
 *         Fecha_Registro: 2023/07/12 03:04:29
 *         Fecha_Actualizacion: 2023/07/12 03:04:29
 */

/**
 *  @swagger
 *  /roles/:
 *  get:
 *      summary: Get All Rol
 *      tags: [Rol]
 *      responses:
 *          200:
 *              description: Obtiene todos los Rols creados
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Rol'
 */
RooT.get('/roles/', Ctll.GetRoles)

/**
 *  @swagger
 *  /roles/{ID}:
 *  get:
 *      tags: [Rol]
 *      summary: Get one Rol by ID
 *      parameters:
 *          - in: path
 *            name: ID
 *            required: true
 *            schema:
 *                type: string
 *            description: Identificacion de Rol
 *      responses:
 *          200:
 *              description: OK
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Rol'
 */
RooT.get('/roles/:ID', Ctll.GetOneRoles)

/**
 * @swagger
 * /roles/create:
 *   post:
 *     tags: [Rol]
 *     summary: Create a new Rol
 *     description: Crea un nuevo Rol.
 *     requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Rol'
 *     responses:
 *       200:
 *          description: Success created 
 */
RooT.post('/roles/create', Ctll.SaveRoles)

/**
 *  @swagger
 *  /roles/put/{ID}:
 *  put:
 *      summary: Put one Rol
 *      tags: [Rol]
 *      parameters:
 *          - in: path
 *            name: ID
 *            required: true
 *            schema:
 *                type: string
 *            description: Identificacion del Rol
 *      requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Rol'
 *      responses:
 *          200:
 *              description: Rol actualizado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Rol'
 *          404:
 *              description: Identificacion no encontrada
 */
RooT.put('/roles/put/:ID', Ctll.PutRoles)

/**
 *  @swagger
 *  /roles/del/{ID}:
 *  delete:
 *      summary: Delete status of Rol
 *      tags: [Rol]
 *      parameters:
 *          - in: path
 *            name: ID
 *            required: true
 *            schema:
 *                type: string
 *            description: Identificacion del Rol
 *      responses:
 *          200:
 *              description: Rol Desactivado/Activo
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Rol'
 *          400:
 *              description: Identificacion no encontrada
 */
RooT.delete('/roles/del/:ID', Ctll.DelRoles)
module.exports = RooT;