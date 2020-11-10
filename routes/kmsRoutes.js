const express = require('express')
const kmsController = require('../controllers/kmsController')
const Distance = require('./../models/Getplaces')
const router = express.Router()


router.route('/').post(kmsController.holder)
module.exports = router;