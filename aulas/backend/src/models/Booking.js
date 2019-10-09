const mongoose = require('mongoose')

// estrutura do model
const BookingSchema = new mongoose.Schema({
    //informacoes do model
    date: String,
    // approved-> reserva aprovada ou nao
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    // referenciando a qual spot o usuario quer criar reserva
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }
})

// exportando e criando model booking
module.exports = mongoose.model('Booking', BookingSchema)