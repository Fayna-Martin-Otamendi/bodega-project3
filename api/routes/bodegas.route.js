const router = require('express').Router()

const {
   /* getAllWineries,
    getOneWinery,
    createWinery,
    modifyWinery,
    deleteWinery*/
} = require('../controllers/auth.controller')

router.get('/bodegas', /*getAllWineries*/)
router.get('/bodegas/:id', /*getOneWinery*/)
router.post('/bodegas', /*createWinery*/)
router.put('/bodegas/:id', /*modifyWinery*/)
router.delete('/bodegas/:id', /*deleteWinery*/)

module.exports = router