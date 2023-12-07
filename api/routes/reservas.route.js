const router = require('express').Router()

const {
   /*verReservas,
   crearReservas,
   detallesReserva,
   actualizaReserva,
   cancelaReserva*/
} = require('../controllers/auth.controller')

router.get('/reservas', /*verReservas*/)
router.post('/reservas', /*crearReservas*/)
router.get('/reservas/:id', /*detallesReserva*/)
router.put('/reservas/:id', /*actualizaReserva*/)
router.delete('/reservas/:id', /*cancelaReserva*/)

module.exports = router