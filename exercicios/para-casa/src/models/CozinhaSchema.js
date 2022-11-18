const mongoose = require('mongoose');

const cozinhaSchema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    nome: {
        type: String,
        required: true
    },
    cnpj: {
        type: Number,
        required: true,
        unique: true
    },
    iniciativa_privada: {
        type: Boolean,
        required: false
    },
    endereco: {
        cep: {
            type: String,
            required: true
        },
        rua: {
            type: String,
            required: true
        },
        numero: {
            type: Number,
            required: true
        },
        complemento: {
            type: String,
            required: false
        },
        referencia: {
            type: String,
            required: false
        },
        estado: {
            type: String,
            required: true
        },
        cidade: {
            type: String,
            required: true
        },
        bairro: {
            type: String,
            required: true
        }
    },
    bairros_atuantes:[{
        type: String,
        require: true
    }],
         
    site: {
        type: String,
    },
    atividades_disponiveis:[],

    pessoa_responsavel: {
        type: String,
        required: true
    }
}, {timestamp: true});

module.exports = mongoose.model('cozinha', cozinhaSchema);