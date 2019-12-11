const Ocorrencias = require('../model/ocorrencias');
const PDFKit = require('pdfkit');
const fs = require('fs');

//GET

exports.getOcorrencias = (req, res) => {
  Ocorrencias.find(function (err, ocorrencias) {
    if (err) res.status(500).send(err);
    const pdf = new PDFKit();
    pdf
      .font('Helvetica')
      .fontSize('13')
      .fillColor('#6155a4')
      .text(` ${ocorrencias[0].especificacaoTecnica}`, {
        align: 'left'
      })

    pdf.pipe(fs.createWriteStream('ocorrencias.pdf'));
    pdf.end();
    res.status(200).send(ocorrencias);
  })
}

exports.getOcorrencia = (req, res) => {
  const ocorrenciaId = req.params.id

  Ocorrencias.findById(ocorrenciaId, function (err, ocorrencia) {
    if (err) return res.status(500).send(err);

    if (!ocorrencia) {
      return res.status(200).send({ mensagem: `Infelizmente não localizamos a ocorrencia de id: ${ocorrenciaId}` });
    }

    res.status(200).send(ocorrencia);
  })
}

// exports.getFabricante = (req, res) => {
//   const fabricantes = req.params.fabricante;
//   Ocorrencias.find({ fabricantes }, function (err, fabricante) {
//     if (err) res.status(500).send(err);
//     res.status(200).send(fabricante);
//   })
// }

//POST
exports.post = (req, res) => {
  let ocorrencia = new Ocorrencias(req.body);

  ocorrencia.save(function (err) {
    if (err) res.status(500).send(err);

    res.status(201).send({ mensagem: 'Ocorrência incluída com sucesso' });

  })
}

//PUT
exports.update = (req, res) => {
  Ocorrencias.update(
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
  const idOcorrencia = req.params.id

  Ocorrencias.findById(idOcorrencia, function (err, ocorrencia) {
    if (err) return res.status(500).send(err);

    if (!ocorrencia) {
      return res.status(200).send({ mensagem: 'Infelizmente não localizamos a ocorrência' })
    }

    ocorrencia.remove(function (err) {
      if (!err) {
        res.status(200).send({ mensagem: 'Ocorrencia removida com sucesso' })
      }
    })
  })
}