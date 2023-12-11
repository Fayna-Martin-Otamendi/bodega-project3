const Calificación = require('../models/tours.model')

async function getAllTours(req, res) {
    try{
        const listaTours = await tours.findAll({
            where: req.query
        })

        return res.status(200).json(listaTours)
    } catch (error) {
        res.status(500).send(error)
        console.log("El error está en la funcion getAllTours")
    }
}

async function getOneTour(req, res) {
    try{
        const tourDetails = await tours.findByPk(req.params.tourId)

        if (!tourId) {
        return res.status(404).send('Tour not found')}
        return res.status(200).json(tourDetails)
    } catch (error) {
        res.status(500).send(error)
        console.log("El error está en la funcion getOneTour")
    }
}

async function createTour(req, res) {
    try {
        const [tour] = await tour.update(req.body, {
            where: {
                id: req.params.tourId
            }
        })
        if (!tour) {
            return res.status(404).send('Tour not found')
        }
        return res.status(200).json( { message: 'Tour updated' } )
    } catch (error) {
        console.log("Error updating tour")
        return res.status(500).json()
    }
}

const deleteTour = async (req, res) => {
    try {
        const book = await tour.destroy({
            where: {
                id: req.params.tourId
            }
        })
        if (!book) {
            return res.status(404).send("Tour not found")
        }
        return res.status(200).json( { message: "Tour deleted" } )
    } catch (error) {
        console.log("Error deleting tour")
        res.status(500).json()
    }
}

const getAllMyTours = async (req, res) => {
    try {
        const tour = await tour.findAll({
            where: req.params.userId,
        })

        return res.status(200).json(tour)
    } catch (error) {
        console.log("Error in get all tour")
        return res.status(500).json(error)
    }
}

module.exports = {
    getAllMyTours,
    getAllTours,
    getOneTour,
    deleteTour,
    createTour
}