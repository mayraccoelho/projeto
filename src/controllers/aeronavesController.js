const Aeronaves = require('../model/aeronaves');

//GET
exports.getAeronaves = (req, res) => {
  Aeronaves.find(function (err, aeronaves) {
    if (err) res.status(500).send(err);
    res.status(200).send(aeronaves);
  })
}

exports.getAeronave = (req, res) => {
  const aeronaveId = req.params.id

  Aeronaves.findById(aeronaveId, function (err, aeronave) {
    if (err) return res.status(500).send(err);

    if (!aeronave) {
      return res.status(200).send({ mensagem: `Infelizmente não localizamos a aeronave de id: ${aeronaveId}` });
    }

    res.status(200).send(aeronave);
  })
}



//POST
exports.post = (req, res) => {
  let aeronave = new Aeronaves(req.body);

  aeronave.save(function (err) {
    if (err) res.status(500).send(err);

    res.status(201).send({ mensagem: 'Aeronave incluída com sucesso' });

  })
}

//PUT
exports.update = (req, res) => {
  Aeronaves.update(
    { _id: req.params.id },
    { $set: req.body },
    { upsert: true },
    function (err) {
      if (err) return res.status(500).send({ message: err });
      res.status(200).send({ mensagem: "Atualizado com sucesso" });
    })
}

//DELETE
exports.delete = (req, res) => {
  const idAeronave = req.params.id

  Aeronaves.findById(idAeronave, function (err, aeronave) {
    if (err) return res.status(500).send(err);

    if (!aeronave) {
      return res.status(200).send({ mensagem: 'Infelizmente não localizamos a aeronave' })
    }

    aeronave.remove(function (err) {
      if (!err) {
        res.status(200).send({ mensagem: 'Aeronave removida com sucesso' })
      }
    })
  })
}