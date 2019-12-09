const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require('body-parser');

const app = express()

mongoose.connect("mongodb+srv://admin:admin123@acidentesaereos-gocve.mongodb.net/acidentesaereos", { useNewUrlParser: true });


let db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function () {
  console.log("conexão feita com sucesso.")
})


const ocorrencias = require("../src/routes/ocorrenciasRoute")

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use(bodyParser.json());

app.use("/ocorrencias", ocorrencias)

module.exports = app
