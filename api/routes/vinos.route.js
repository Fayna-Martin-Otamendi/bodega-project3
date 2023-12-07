const router = require('express').Router()

const {
   /* getAllWines,
    getOneWine,
    createWine,
    modifyWine,
    deleteWine*/
} = require('../controllers/auth.controller')

router.get('/vinos', /*getAllWines*/)
router.get('/vinos/:id', /*getOneWine*/)
router.post('/vinos', /*createWine*/)
router.put('/vinos/:id', /*modifyWine*/)
router.delete('/vinos/:id', /*deleteWine*/)

module.exports = router