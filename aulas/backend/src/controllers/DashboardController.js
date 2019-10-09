const Spot = require('../models/Spot')

module.exports = {
    // exibindo um dashboard(ex. perfil)
    // funcao assincrona
    async show(req, res) {
        // buscando id do usuario logado
        const { user_id } = req.headers
        // buscando os spots
        // executa await, espera respota, depois continua fluxo
        const spots = await Spot.find({ user: user_id })

        return res.json(spots)
    }
}