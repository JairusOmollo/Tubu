const express = require ('express')
const hearsesController = require('./../controllers/hearsesController')
const router = express.Router()
const kmsController= require('./../controllers/kmsController')
const Distance = require ('./../models/Getplaces')
const app = require('../app')





router.route('/').get(hearsesController.getAllHearses)
router.route('/:id').get(hearsesController.getOneHearse)



module.exports = router;