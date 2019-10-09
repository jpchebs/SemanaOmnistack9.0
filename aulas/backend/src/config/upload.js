const multer = require('multer')
const path = require('path')

// exporrtando objeto
module.exports = {
    // informacoes
    // diskStorage -> salva nos arquivos fisicos
    storage: multer.diskStorage({
        // destination pasta que serao salvos
        // path.resolve informa a pasta que serao gravados os arquivos, separando a barra corretamente
        // __driname informa o diretorio da pasta atual
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        // nome do arquivo funcao (req-> requisicao, file-> arquivo, cb-> callback)
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname)
            const name = path.basename(file.originalname, ext)

            // null -> retorna erro caso haja
            cb(null, `${name}-${Date.now()}${ext}`)
        },
    }),
}