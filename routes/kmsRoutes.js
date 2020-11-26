const express = require('express')
const kmsController = require('../controllers/kmsController')
const Distance = require('./../models/Getplaces')
const router = express.Router()
const {check,validationResult} = require('express-validator')



  const validate = (req, res,next) =>{
    //check validate data
    const result= validationResult(req);
    var errors = result.errors;
    for (var key in errors) {
          console.log(errors[key].value);
    }
    if (!result.isEmpty()) {
    //response validate data to register.ejs
       res.render('index', {
        errors: errors
      })
      
    }
    next()
}

router.route('/').post([
    check('origin', 'Please enter PICKUP location').not().isEmpty(),
    check('destination', 'Please enter DROPOFF location').not().isEmpty(),

  ],validate, kmsController.holder)
module.exports = router;