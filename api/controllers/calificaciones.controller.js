const Calificación = require('../models/calificaciones.model')

async function createQualification(req, res) {
    try {
        const qualification = await Calificación.create({
            puntuacion: req.body.puntuacion,
            comentarios: req.body.comentarios
        })
        return res.status(200).json({message: 'Qualification created', qualification})
    } catch (error) {
        res.status(500).send(error)
    }
}

async function modifyQualification(req, res) {
    try{ 
        const [qualificationExist, qualification] = await Calificación.update(req.body,{
            returning: true,
            where: {
                id: req.params.id_usuario
            },
        })
        if (qualificationExist !== 0) {
            return res.status(200).json({ message: 'Qualification modified',qualification })
        } else {
            return res.status(404).send('Qualification not found')
        }
    } catch (error) {
        return res.status(500).send(error)
    }
}

async function deleteQualification(req, res){
    try{
        const qualification = await Calificación.destroy({
            where: {
                id: req.params.contactId
            },
        })
        if(qualification) {
            return res.status(200).json('Qualification deleted')
        } else {
            return res.status(404).send('Contact not found')
        }
    } catch (error) {
        return res.status(500).send(error)
    }
}

module.exports = {
    createQualification,
    modifyQualification,
    deleteQualification
}