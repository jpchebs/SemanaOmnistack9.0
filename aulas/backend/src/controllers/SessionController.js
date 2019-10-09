const User = require('../models/User')

// index(retorna listagem), show(listar unica 'sessao'), store(criar), update(alterar), destroy(remover, dletar) ( médtodos )
// exportando objeto
module.exports = {
    // funcao assincrona-await
    async store(req, res) {
        // pegando email do usuario
        const { email } = req.body; // const email = req.body.email

        // await aguarda um instrucao a ser executado
        // executa await, espera respota, depois continua fluxo
        // procurando usuario, se ja existe, salva na variavel email
        let user = await User.findOne({ email })

        // se nao encontar, ele salva sobreescrenvendo
        if (!user) {
            user = await User.create({ email })
        }

        // objeto com as informacoes que serao criadas no usuario
        // const user = await User.create({ email })

        // retornando resposta json
        return res.json(user)
    }
}