const router = require('express').Router()

const {
    /*commentWine,
    commentsOfWine,
    rateWine,
    seeRatingsOfWine*/
} = require('../controllers/auth.controller')

router.post('/vinos/:id_vino/comentarios', /*commentWine*/)
router.get('/vinos/:id_vino/comentarios', /*comentsOfWine*/)
router.post('/vinos/:id_vino/calificaciones', /*rateWine*/)
router.get('/vinos/:id_vino/calificaciones', /*seeRatingsOfWine*/)

module.exports = router