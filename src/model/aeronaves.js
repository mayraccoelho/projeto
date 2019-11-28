const mongoose = require('mongoose');

const AeronavesSchema = new mongoose.Schema({
    modelo: { type: String },
    tipo: { type: String },
    fabricante: { type: String },
    paisOrigem: { type: String },
    capacidadeMaxima: { type: Number },
    quantidadeAcidentes: { type: Number },
    vitimas: { type: Number },
    vitimasFatais: { type: Number }
}, {
    versionKey: false
})


const Aeronaves = mongoose.model('Aeronaves', AeronavesSchema);

module.exports = Aeronaves;
