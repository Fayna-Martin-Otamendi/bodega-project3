const router = require('express').Router()

const authRouter = require('./auth.route')
const userRouter= require('./user.route')
const bodegasRouter = require('./bodegas.route')
const calificacionesRouter= require('./calificaciones.route')
const detalles_pedidoRouter= require('./detalles_pedido.route')
const reservasRouter= require('./reservas.route')
const tourRouter= require('./tour.route')
const vinosRouter= require('./vinos.route')

router 
    .use('/auth', authRouter)
    .use('/user', userRouter)
    .use('/bodegas', bodegasRouter)
    .use('/vinos', calificacionesRouter)
    .use('/pedidos', detalles_pedidoRouter)
    .use('/reservas', reservasRouter)
    .use('/tours', tourRouter)
    .use('/vinos', vinosRouter)

module.exports = router