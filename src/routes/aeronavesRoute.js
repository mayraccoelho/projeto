const express = require("express")
const router = express.Router()
const controller = require("../controllers/aeronavesController")

router.get("/", controller.getAeronaves)
router.get("/:aeronave", controller.getAeronave)
//outer.get("/:fabricante", controller.getFabricante)
//router.get("/acidentes", controller.getAcidentes)

router.post("/", controller.post)

router.put('/:id', controller.update)

router.delete('/:id', controller.delete)

module.exports = router
