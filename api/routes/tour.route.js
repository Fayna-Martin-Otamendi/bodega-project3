const router = require('express').Router()

const {
   /*getAllTours,
   getTour,
   createTour,
   modifyTour,
   deleteTour,
   getAllMyTours*/
} = require('../controllers/auth.controller')

router.get('/tours', /*verReservas*/)
router.get('/tours/:id', /*detallesReserva*/)
router.post('/tours', /*detallesReserva*/)
router.put('/tours/:id', /*crearReservas*/)
router.delete('/tours/:id', /*actualizaReserva*/)
router.get('/tours/:idowner', /*cancelaReserva*/)

module.exports = router