const Booking = require('../models/Booking')

module.exports = {
    async store(req, res) {
        // pegando id do usuario
        const { user_id } = req.headers
        // pegando id do spot
        const { spot_id } = req.params
        const { date } = req.body

        // criacao de nova reserva
        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,
        })

        // populando relacionando de spot e usuario
        await booking.populate('spot').populate('user').execPopulate()

        const ownerSocket = req.connectedUsers[booking.spot.user]

        if ( ownerSocket ) {
            req.io.to(ownerSocket).emit('booking_request', booking)
        }

        return res.json(booking)
    }
}