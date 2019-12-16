const express = require("express")
const router = express.Router()
const controller = require("../controllers/ocorrenciasController")

/**
 * @api {get} /ocorrencias
 * @apiGroup Ocorrencias
 * * 
 * @apiSuccess {Object[]} ocorrencias Lista de Ocorrencias
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   
 *    [{   
 *      "_id": "5deaccd1a091532838646085",
 *   
 *       "especificacaoTecnica": {
 *           "fabricante": "Boeing",
 *           "modelo": "707",
 *           "prefixo": "PP-VJB"
 *       },
 *       "ramo": "Aviação Comercial",
 *       "informacoesVoo": {
 *           "companhiaAerea": "Varig",
 *           "voo": "810",
 *           "origem": "SBGL",
 *           "destino": "KLAX"
 *       },
 *       "informacoesOcorrencia": {
 *           "classificacao": "Acidente",
 *           "data": "27/11/1962",
 *           "tipo": "CFIT - Colisão em Voo Controlado com o Terreno",
 *           "cidade": "Lima",
 *           "estado": "EX",
 *           "pais": "Peru",
 *           "vitimas": 97,
 *           "vitimasFatais": 97
 *       },
 *   }
 *   }]
 *
 */

router.get("/", controller.getOcorrencias)


/**
 * @api {get} /ocorrencias Lista todas as ocorrencias gerando arquivo PDF
 * @apiName getOcorrencias
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
 *  "mensagem": "PDF gerado com sucesso"
 *   }
 * 
 */

router.get("/gerar/pdf", controller.getPdf)


/**
 * @api {get} ocorrencias/:id Lista unica ocorrencia por ID
 * @apiName getOcorrencia
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   [{  
 *       "_id": "5deaccd1a091532838646085",
 *   
 *       "especificacaoTecnica": {
 *           "fabricante": "Boeing",
 *           "modelo": "707",
 *           "prefixo": "PP-VJB"
 *       },
 *       "ramo": "Aviação Comercial",
 *       "informacoesVoo": {
 *           "companhiaAerea": "Varig",
 *           "voo": "810",
 *           "origem": "SBGL",
 *           "destino": "KLAX"
 *       },
 *       "informacoesOcorrencia": {
 *           "classificacao": "Acidente",
 *           "data": "27/11/1962",
 *           "tipo": "CFIT - Colisão em Voo Controlado com o Terreno",
 *           "cidade": "Lima",
 *           "estado": "EX",
 *           "pais": "Peru",
 *           "vitimas": 97,
 *           "vitimasFatais": 97
 *       },
 *   }]
 */


router.get("/vitimasfatais", controller.getVitimas)

/**
 * @api {get} ocorrencias/fabricantes/:fabricante Lista todas as ocorrencias por fabricante
 * @apiName getFabricante
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [{  
 *       "_id": "5deaccd1a091532838646085",
 *   
 *       "especificacaoTecnica": {
 *           "fabricante": "Boeing",
 *           "modelo": "707",
 *           "prefixo": "PP-VJB"
 *       },
 *       "ramo": "Aviação Comercial",
 *       "informacoesVoo": {
 *           "companhiaAerea": "Varig",
 *           "voo": "810",
 *           "origem": "SBGL",
 *           "destino": "KLAX"
 *       },
 *       "informacoesOcorrencia": {
 *           "classificacao": "Acidente",
 *           "data": "27/11/1962",
 *           "tipo": "CFIT - Colisão em Voo Controlado com o Terreno",
 *           "cidade": "Lima",
 *           "estado": "EX",
 *           "pais": "Peru",
 *           "vitimas": 97,
 *           "vitimasFatais": 97
 *       },
 *    }]
 */ 

router.get("/:id", controller.getOcorrencia)


/**
 * @api {get} ocorrencias/vitimasfatais Lista todas as ocorrencias que tiveram vitimas fatais
 * @apiName getVitimas
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    
 *     [{  
 *       "_id": "5deaccd1a091532838646085",
 *   
 *       "especificacaoTecnica": {
 *           "fabricante": "Boeing",
 *           "modelo": "707",
 *           "prefixo": "PP-VJB"
 *       },
 *       "ramo": "Aviação Comercial",
 *       "informacoesVoo": {
 *           "companhiaAerea": "Varig",
 *           "voo": "810",
 *           "origem": "SBGL",
 *           "destino": "KLAX"
 *       },
 *       "informacoesOcorrencia": {
 *           "classificacao": "Acidente",
 *           "data": "27/11/1962",
 *           "tipo": "CFIT - Colisão em Voo Controlado com o Terreno",
 *           "cidade": "Lima",
 *           "estado": "EX",
 *           "pais": "Peru",
 *           "vitimas": 97,
 *           "vitimasFatais": 97
 *       },
 *    }]
 */



router.get("/fabricantes/:fabricante", controller.getFabricante)


/**
 * @api {post} /ocorrencias
 * @apiName ocorrencias
 * 
 * @apiParam (Request Body) {String} fabricante Fabricante da aeronave.
 * @apiParam (Request Body) {String} modelo Modelo da aeronave.
 * @apiParam (Request Body) {String} prefixo Prefixo da aeronave.
 * @apiParam (Request Body) {String} ramo Ramo da Aeronave.
 * @apiParam (Request Body) {String} companhiaAerea Companhia aerea da aeronave.
 * @apiParam (Request Body) {String} voo Voo da aeronave.
 * @apiParam (Request Body) {String} origem Origem da aeronave.
 * @apiParam (Request Body) {String} destino Destino da aeronave.
 * @apiParam (Request Body) {String} classificacao Classificacao do acidente.
 * @apiParam (Request Body) {String} data Data do acidente.
 * @apiParam (Request Body) {String} tipo Tipo de acidente.
 * @apiParam (Request Body) {String} cidade Cidade onde ocorrou o acidente.
 * @apiParam (Request Body) {String} estado Estado onde ocorrou o acidente.
 * @apiParam (Request Body) {String} pais Pais onde ocorreu o acidente.
 * @apiParam (Request Body) {Number} vitimas Vitimas envolvidas no acidente.
 * @apiParam (Request Body) {Number} vitimasFatais Vitimas fatais.
 * 
 * @apiSuccess {Object[]} Ocorrencias Mensagem de sucesso ao incluir uma ocorrencia
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 201 Created
 *   {
 *       "mensagem": "Ocorrência incluída com sucesso"
 *   }
 *
 */

router.post("/", controller.post)


/**
 * @api {put} /:id Altera uma ocorrencia por ID
 * @apiName put
 *
 * @apiParam (Request Body) {String} fabricante Fabricante da aeronave.
 * @apiParam (Request Body) {String} modelo Modelo da aeronave.
 * @apiParam (Request Body) {String} prefixo Prefixo da aeronave.
 * @apiParam (Request Body) {String} ramo Ramo da Aeronave.
 * @apiParam (Request Body) {String} companhiaAerea Companhia aerea da aeronave.
 * @apiParam (Request Body) {String} voo Voo da aeronave.
 * @apiParam (Request Body) {String} origem Origem da aeronave.
 * @apiParam (Request Body) {String} destino Destino da aeronave.
 * @apiParam (Request Body) {String} classificacao Classificacao do acidente.
 * @apiParam (Request Body) {String} data Data do acidente.
 * @apiParam (Request Body) {String} tipo Tipo de acidente.
 * @apiParam (Request Body) {String} cidade Cidade onde ocorrou o acidente.
 * @apiParam (Request Body) {String} estado Estado onde ocorrou o acidente.
 * @apiParam (Request Body) {String} pais Pais onde ocorreu o acidente.
 * @apiParam (Request Body) {Number} vitimas Vitimas envolvidas no acidente.
 * @apiParam (Request Body) {Number} vitimasFatais Vitimas fatais.
 * 
 * @apiSuccess {Object[]} Ocorrencias Mensgem de sucesso ao incluir uma ocorrencia
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *   "mensagem": "Atualizado com sucesso"
 *       }
 */

router.put('/:id', controller.update)


/**
 * @api {delete} /:id Deleta uma ocorrencia por ID
 * @apiName delete
 * 
 * @apiParam {Number} id ID da ocorrencia.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   {
 *   "mensagem": "Ocorrencia removida com sucesso"
 *   }
 */

router.delete('/:id', controller.delete)



module.exports = router
