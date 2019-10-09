const express = require('express')
const multer = require('multer') // multer mexe arquivos multifpartormdata, upload de imagen, etc

const uploadConfig = require('./config/upload')
const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')
const ApprovalController = require('./controllers/ApprovalController')
const RejectionController = require('./controllers/RejectionController')

// separando roteador do express em uma variavel (get, post, put, delet)
const routes = express.Router()
const upload = multer(uploadConfig)

// criando rotas
routes.get('/dashboard', DashboardController.show)
routes.get('/spots', SpotController.index)
routes.post('/sessions', SessionController.store)
routes.post('/spots', upload.single('thumbnail'), SpotController.store)
routes.post('/spots/:spot_id/bookings', BookingController.store)
routes.post('/bookings/:booking_id/approvals', ApprovalController.store)
routes.post('/bookings/:booking_id/rejections', RejectionController.store)

// exportando rotas para outro modulos usa-las
module.exports = routes