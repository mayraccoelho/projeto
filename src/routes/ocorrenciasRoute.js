const express = require("express")
const router = express.Router()
const controller = require("../controllers/ocorrenciasController")


/**
 * @api {get} /ocorrencias Lista todas as ocorrencias
 * @apiName getOcorrencias
 *
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      "_id": "5deaccd1a091532838646085",
 *      {
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
 *       }
 */
router.get("/", controller.getOcorrencias)
router.get("/vitimasfatais", controller.getVitimas)
router.get("/:id", controller.getOcorrencia)
router.get("/fabricantes/:fabricante", controller.getFabricante)

router.post("/", controller.post)

router.put('/:id', controller.update)

router.delete('/:id', controller.delete)



module.exports = router
