// require -> importar  dependencias
const express = require('express') // 
const mongoose = require('mongoose') // ajuda a mexer com banco de dados
const cors = require('cors')
const path = require('path')
const socketio = require('socket.io')
const http = require('http')

// importando routes - com caminho relativo './' 
const routes = require('./routes')

const app = express()
const server = http.Server(app)
const io = socketio(server)

// conectando ao mongoDB atlas
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-luu9c.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true, // cfg mongo para tirar avisos
    useUnifiedTopology: true, // cfg mongo para tirar avisos
})

const connectedUsers = {}

io.on('connection', socket => {
    const { user_id } = socket.handshake.query

    connectedUsers[user_id] = socket.id
})

// req -> requisicao de informacoes
// res -> devolve uma resposta para requisicao

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params, vem da rota (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)
// next continua o fluxo da funcao

app.use((req, res, next) => {
    req.io = io
    req.connectedUsers = connectedUsers

    return next()
})

app.use(cors())
// express entende comando de forma sequencial
// express.json entende tudo o que vier a baixo
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes)


// porta escutando porta '3333'
server.listen(3333)