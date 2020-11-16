const app = require('../app');
const Hearse = require ('./../models/GetHearses');


 exports.getAllHearses =  (req, res) => {

   Hearse.find(req.query).then((result) => {

      let user= req.session.user
      let kms = user.kms
      
      
  
     let vehicle = req.query
    
     let type =[{vehicle:'Van'},{vehicle:'Wagon'},{vehicle:'Bus'}]
  
     if(vehicle === type[0]){
      
       let type= {
         vehicle:'Van'
       }
       let charge = (kms * 90).toLocaleString
       
       res.render('hearses', {hearses:result, users:user, charges:charge  })
      } else if(vehicle === type[1]){
        
        let type = {
        vehicle:'Wagon'
       }
       
       let charge = kms * 90
       res.render('hearses', {hearses:result, users:user, charges:charge })
  
      } else {
       
        let type = {
          vehicle:'Bus'
         }

          let charged = (kms * 214)

            if(charged < 27000){
              let charge = ((kms * 214) + 18000).toLocaleString("en", {   
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            })
            req.session.charge = charge   
            res.render('hearses', {hearses:result, users:user, charges:charge })
            } else if (charged){
            let charge = charged.toLocaleString("en", {   
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
          })
          req.session.charge = charge   
            res.render('hearses', {hearses:result, users:user, charges:charge })
        }
     
    }
    
  }).catch(error => {
    console.log(error)
  })       
}
      
    
         

  exports.getOneHearse = (req, res) => {
    Hearse.findById(req.params.id).then((result) => {
      let user= req.session.user
      let charge = req.session.charge
      let kms = user.kms
      req.session.hearseSelected= result
      
      res.render('budget', {budget:result,users:user, charges:charge })
      
    })
    .catch((err) => {
      console.log(err)
    })
  } 

function newFunction(charge) {
  console.log(charge);
}
