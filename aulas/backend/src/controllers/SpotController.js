const User = require('../models/User')
const Spot = require('../models/Spot')

// estrutura do model
module.exports = {
    // funcao assincrona 
    // retorna uma lista de spot(lugares cadastrados)
    async index(req, res) {
        const { tech } = req.query
        // procurando os spots
        const spots = await Spot.find({ techs: tech })
        return res.json(spots)
    },

    async store(req, res) {
        const { filename } = req.file // nome do arquivo salvo na pasta uploads
        const { company, techs, price } = req.body
        const { user_id } = req.headers // headers server para enviar contexto da aplicao, utilizado na autenticacao

        // validacao de existencia de usuario
        const user = await User.findById(user_id)
        // se usuario nao existe retorna erro
        if (!user) {
            return res.status(400).json({ error: 'Usuário não existe' })
        }

        // criando spot
        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            // split-> corta a string em pedaços com ',', map-> percorre array, trim-> retira espaço antes e depois da string
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })

        return res.json(spot)
    }
}