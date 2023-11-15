const { Router } = require('express');
const RooT = Router();
const Ctll = require('../controllers/comprasController.js');
//const {valcomprasCreate, valcomprasPut} = require('../Utils/comprasaVal.js');


/**
 *  @swagger
 *  components:
 *      schemas:
 *       Compra:
 *        type: object
 *        properties:
 *         ID:
 *          type: Number
 *          description: Identificador de Compra.
 *         Usuario_ID:
 *          type: String
 *          description: Nombre del Compra.
 *         Pintura_ID:
 *          type: Number
 *          description: identificacdor del Compra padre.
 *         Costo_Final:
 *          type: Number
 *          description: identificacdor del Compra padre.
 *         Descuento:
 *          type: Number
 *          description: identificacdor del Compra padre.
 *         Fecha_Venta:
 *          type: Number
 *          description: identificacdor del Compra padre.
 *         
 *        required:
 *         - ID
 *        example:
 *         ID: 1
 *         Usuario_ID: 2
 *         Pintura_ID: 2
 *         Costo_Final: 1233.4
 *         Descuento: 2.2
 *         Fecha_Venta: 2023-10-16T00:20:18.205Z
 */

/**
 *  @swagger
 *  /compras/:
 *  get:
 *      summary: Get All Compra
 *      tags: [Compra]
 *      responses:
 *          200:
 *              description: Obtiene todas las Compras realizadas
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Compra'
 */
RooT.get('/compras/', Ctll.GetCompras)

/**
 *  @swagger
 *  /compras/{ID}:
 *  get:
 *      tags: [Compra]
 *      summary: Get one Compra by ID
 *      parameters:
 *          - in: path
 *            name: ID
 *            required: true
 *            schema:
 *                type: string
 *            description: Identificacion de Compra
 *      responses:
 *          200:
 *              description: OK
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Compra'
 */
RooT.get('/compras/:ID', Ctll.GetOneCompras)

/**
 * @swagger
 * /compras/create:
 *   post:
 *     tags: [Compra]
 *     summary: Create a new Compra
 *     description: Crea un nuevo Compra.
 *     requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Compra'
 *     responses:
 *       200:
 *          description: Success created 
 */
RooT.post('/compras/create', Ctll.SaveCompras)

/**
 *  @swagger
 *  /compras/put/{ID}:
 *  put:
 *      summary: Put one Compra
 *      tags: [Compra]
 *      parameters:
 *          - in: path
 *            name: ID
 *            required: true
 *            schema:
 *                type: string
 *            description: Identificacion del Compra
 *      requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Compra'
 *      responses:
 *          200:
 *              description: Compra actualizado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Compra'
 *          404:
 *              description: Identificacion no encontrada
 */
RooT.post('/compras/put/:ID', Ctll.PutCompras)
// RooT.get('/compras/del/:ID', Ctll.Delcompras)
module.exports = RooT;