const Ocorrencias = require('../model/ocorrencias');
const PDFKit = require('pdfkit');
const fs = require('fs');

//GET

exports.getOcorrencias = (req, res) => {

  Ocorrencias.find(function (err, ocorrencias) {
    if (err) res.status(500).send(err);
    res.status(200).send(ocorrencias);
  })
}

exports.getPdf = (req, res) => {

  Ocorrencias.find(function (err, ocorrencias) {
    if (err) res.status(500).send(err);

    let quantidadeAcidentes = ocorrencias.length;
    let vitimasF = 0;
    for (let i = 0; i < ocorrencias.length; i++) {
      vitimasF += ocorrencias[i].informacoesOcorrencia.vitimasFatais
    }
    let pdf = new PDFKit();
    pdf
      .image('C:/Users/SempreIT/Documents/Programação/reprograma/projetoFinalReprograma/reprograma-projeto-final/src/images/cenipa2.png', 80, 60)
      .font('Helvetica-Bold')
      .fontSize('14')
      .fillColor('#000')
      .text(`Relatório Estatístico \nde Incidentes e Acidentes Aeronáuticos`, {
        align: 'right'
      })
    pdf
      .font('Helvetica')
      .fontSize('12')
      .text(`\n\n\n\n\n\n\nEsta API tem como finalidade gerar relatório completo de todos os  incidentes, incidentes graves e acidentes aéreos que já possuem relatório final oficial realizado pelo CENIPA.
      \nO objetivo é proporcionar a conscientização de vários elementos que possam contribuir para um acidente aéreo.
      \nO CENIPA (Centro de Investigação e Prevenção de Acidentes Aéreos) é o órgão do Comando da Aeronáutica responsável pelas atividades de investigação de acidentes aeronáuticos da aviação civil e da Força Aérea Brasileira. ` , {
        align: 'justify'
      })

    pdf
      .fontSize('12')
      .fillColor('#000')
      .text(`\nSegundo o CENIPA, promover a prevenção de acidentes aeronáuticos, preservando os recursos humanos e materiais, visando o progresso da aviação brasileira (CENIPA, 2019) \n`, {
        align: 'justify'
      })

    pdf
      .fontSize('12')
      .fillColor('#000')
      .text(` \nAs estatísticas do CENIPA nos mostra que, dentre todos os fatores contribuintes para um acidente aéreo, o humano representa a maior causa contribuinte para essas ocorrências, assim exigindo maior preocupação/estudo.
      \nO uso dos relatórios abaixo listados para qualquer outro fim poderá trazer efeitos adversos à prevenção de novas ocorrências.\n\nDe 1962 até o momento, obtivemos um total de ${quantidadeAcidentes} ocorrências aéreas, entre incidentes, incidentes graves e acidentes, no qual as investigações já foram concluidas. E um total de ${vitimasF} vítimas fatais. `, {
        align: 'justify'
      })

    pdf
      .fontSize('15')
      .fillColor('#000')
      .text(`\n Vamos voar em segurança!`, {
        align: 'right'
      })

    pdf.pipe(fs.createWriteStream('ocorrencias.pdf'));
    pdf.end();
    res.status(200).send({ mensagem: 'PDF gerado com sucesso' });
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

exports.getVitimas = (req, res) => {
  Ocorrencias.find({
    "informacoesOcorrencia.vitimasFatais": { $gt: 0 }
  }, function (err, vitimas) {
    if (err) res.status(500).send(err)
    res.status(200).send(vitimas);
  });
}

exports.getFabricante = (req, res) => {
  const fabricantes = req.params.fabricante;
  Ocorrencias.find({
    "especificacaoTecnica.fabricante": fabricantes
  }, function (err, fabricante) {
    if (err) res.status(500).send(err)
    res.status(200).send(fabricante);
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