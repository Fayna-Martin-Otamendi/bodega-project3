const router = require('express').Router()

const {
   /*getAllUsers,
   getOwnProfile,
   getAnUser,
   createUser,
   modifyOwnProfile,
   modifyOwnPassword,
   modifyAnUser,
   deleteAnUser,
   deleteOwnProfile*/
} = require('../controllers/auth.controller')

router.get('/usuario', /*verReservas*/)
router.get('/usuario/perfil', /*detallesReserva*/)
router.get('/usuario/:userId', /*detallesReserva*/)
router.post('/usuario', /*crearReservas*/)
router.put('/usuario/perfil', /*actualizaReserva*/)
router.put('/usuario/contraseña', /*cancelaReserva*/)
router.put('/usuario/:userId', /*crearReservas*/)
router.delete('/usuario/:userId', /*actualizaReserva*/)
router.delete('/usuario/perfil', /*cancelaReserva*/)

module.exports = router