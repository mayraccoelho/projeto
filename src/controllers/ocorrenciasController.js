const Ocorrencias = require('../model/ocorrencias');
const PDFKit = require('pdfkit');
const fs = require('fs');

//GET

exports.getOcorrencias = (req, res) => {
  Ocorrencias.find(function (err, ocorrencias) {
    if (err) res.status(500).send(err);
    let quantidadeAcidentes = Ocorrencias.find().count()
    let vitimasF ='ds'
    const pdf = new PDFKit();
    pdf
      .font('Helvetica')
      .fontSize('13')
      .fillColor('#000')
      .text(`Relatórios Finais de Investigação de Acidentes e Incidentes Aeronáuticos\n\n\nO objetivo das investigações realizadas pelo Sistema de Investigação e Prevenção de Acidentes Aeronáuticos (SIPAER) é a prevenção de futuros acidentes aeronáuticos e não a atribuição de culpa ou responsabilidade. O uso dos relatórios abaixo listados para qualquer outro fim poderá trazer efeitos adversos à prevenção de novas ocorrências.\n\nAté o momento todos os acidentes aéreos somam o total de: ${quantidadeAcidentes} com ${vitimasF} de vítimas fatais. `, {
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

exports.getFabricante = (req, res) => {
  const fabricantes = req.params.fabricante;
  Ocorrencias.find({ "especificacaoTecnica.fabricante":  fabricantes 
  }, function (err, fabricante) {
      if (err) res.status(500).send(err)
      res.status(200).send(fabricante);
  });  
}

exports.getVitimas = (req, res) => {
  Ocorrencias.find({ "informacoesOcorrencia.vitimasFatais": { $gt: 0 } 
  }, function (err, vitimas) {
      if (err) res.status(500).send(err)
      res.status(200).send(vitimas);
  });  
}




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