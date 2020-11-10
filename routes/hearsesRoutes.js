const express = require ('express')
const hearsesController = require('./../controllers/hearsesController')
const router = express.Router()
const kmsController= require('./../controllers/kmsController')
const Distance = require ('./../models/Getplaces')
const app = require('../app')

let alldata
// const getKms = async (req, res, next) => {

// try{
//     const picky = req.body.origin;
//     const dropy = req.body.destination;
    
//     //1. Create new distance object with parameters 
//    const distance = new Distance(picky, dropy);
//    //2. Calls google api and returns distance in Kilometers
   
//    const alldata = await distance.getDistance();
   
//    res.locals.kms = alldata
   
// console.log(alldata)
//    next()


//     }catch(error){
//       console.log(error)

     
  
//     }
  
  
    

//    }

   



router.route('/').get(hearsesController.getAllHearses)
router.route('/:id').get(hearsesController.getOneHearse)



module.exports = router;