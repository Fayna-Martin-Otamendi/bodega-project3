const router = require('express').Router()

const {
    /*createPedido,
    detailsPedido,
    updatePedido,
    cancelPedido */
} = require('../controllers/auth.controller')

router.post('/pedidos', /*createPedido*/)
router.get('/pedidos/:id', /*detailsPedido*/)
router.put('/pedidos/:id', /*updatePedido*/)
router.delete('/pedidos/:id', /*cancelPedido*/)

module.exports = router