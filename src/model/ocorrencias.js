const mongoose = require('mongoose');

const OcorrenciasSchema = new mongoose.Schema({

    especificacaoTecnica: {
        fabricante: { type: String },
        modelo: { type: String },
        prefixo: { type: String }
    },
    ramo: { type: String },
    informacoesVoo: {
        companhiaAerea: { type: String },
        voo: { type: String },
        origem: { type: String },
        destino: { type: String }
    },
    informacoesOcorrencia: {
        classificacao: { type: String },
        data: { type: String },
        tipo: { type: String },
        cidade: { type: String },
        estado: { type: String },
        pais: { type: String },
        vitimas: { type: Number },
        vitimasFatais: { type: Number }
    }
}, {
    versionKey: false
})

const Ocorrencias = mongoose.model('Ocorrencias', OcorrenciasSchema);

module.exports = Ocorrencias;