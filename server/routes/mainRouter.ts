const controller = require('../controllers/mainController')
const express = require('express')
const router = express.Router()


router.post('/trip', controller.trip, (req, res) => {
    return res.status(200).json(res.locals)
})

module.exports = router