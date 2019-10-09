const mongoose = require('mongoose')

// estrutura do model
const SpotSchema = new mongoose.Schema({
    // informacoes do model
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    // salvando usuario que criou o objeto
    user: {
        // granvando o id do usuario '_id'
        type: mongoose.Schema.Types.ObjectId,
        // referencia de usuario
        ref: 'User'
    }
}, {
    toJSON: {
        virtuals: true,
    },
})

SpotSchema.virtual('thumbnail_url').get(function() {
    return `http://192.168.0.104:3333/files/${this.thumbnail}`
})

// exportando e criando model booking
module.exports = mongoose.model('Spot', SpotSchema)