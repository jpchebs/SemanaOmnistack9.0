const mongoose = require('mongoose')

// estrutura do usuario
const UserSchema = new mongoose.Schema({
    // informacoes de campos do usuario no BD (ex. nome, idade, telefone, ativo(boolean) )
    email: String,
})

// exportando e criando model usuario (User)
module.exports = mongoose.model('User', UserSchema)