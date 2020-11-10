const express = require ('express')
const budgetController = require('../controllers/budgetController')
const router = express.Router()


  
router.route('/').get(budgetController.getOneHearse).post(budgetController.mailer)


module.exports = router;