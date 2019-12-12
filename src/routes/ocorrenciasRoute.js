const express = require("express")
const router = express.Router()
const controller = require("../controllers/ocorrenciasController")

router.get("/", controller.getOcorrencias)
router.get("/:id", controller.getOcorrencia)
router.get("/fabricantes/:fabricante", controller.getFabricante)
router.get("/vitimasfatais", controller.getVitimas)

router.post("/", controller.post)

router.put('/:id', controller.update)

router.delete('/:id', controller.delete)

module.exports = router
