const Reserva = require('../models/reservas.model')

async function getAllReservations(req, res){
    try{
        const reservation = await Reserva.findAll({
            where: req.query
        })
        if (reservation){
            return res.status(200).json(reservation)
        } else {
            return res.status(404).send('No reservation found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createReservation(req,res){
    try{
        const reservation = await Reserva.create({
            id_usuario: req.body.id_usuario,
            personas: req.body.personas
        })
        return res.status(200).json({message:'Reservation created', reservation})
    } catch (error){
        res.status(500).send(error)
    }
}

async function modifyReservation(req, res){
    try{
        const [reservationExists, reservation] = await Reserva.update(req.body,{
            returning: true,
            where: {
                id: req.params.id_usuario
            },
        })
        if (reservationExists !== 0) {
            return res.status(200).json({message: 'Reservation modified', reservation})
        } else {
            return res.status(404).send('Reservation not found')
        } 
    } catch (error) {
        return res.status(500).send(error)
    }
}

async function deleteReservation(req, res) {
    try{
        const reservation = await Reserva.destroy({
            where: {
                id: req.params.id_usuario
            },
        })
        if (reservation) {
            return res.status(200).json('Reservation deleted')
        } else {
            return res.status(404).send('Reservation not found')
        }
    } catch (error){
        return res.status(500).send(error)
    }
}

module.exports = {
    getAllReservations,
    createReservation,
    modifyReservation,
    deleteReservation
}

