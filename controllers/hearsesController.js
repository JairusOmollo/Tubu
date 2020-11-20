const app = require('../app');
const Hearse = require ('./../models/GetHearses');


 exports.getAllHearses =  (req, res) => {

   Hearse.find(req.query).then((result) => {

      let user= req.session.user;
      let kms = user.kms;


      let vehicle = JSON.stringify(req.query);
      let van = JSON.stringify({vehicle:'Van'})
      let bus = JSON.stringify({vehicle:'Bus'})
      let wagon = JSON.stringify({vehicle:'Wagon'})

      // 1. Calculate charges for a van.
      
     if(vehicle === van ){
       
      let charged = (kms * 150)
      if(charged > 30000 ){
          let charge = ((kms * 150) - 25000).toLocaleString("en", {   
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
      // 2. Calculate wagon charges 
      } else if (vehicle === wagon){
        
        let charged = (kms * 160)

        if(charged < 27000){
          let charge = ((kms * 160) + 15000).toLocaleString("en", {   
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
  
      } else if (vehicle === bus)  {
        
          let charged = (kms * 214)

            if(charged < 27000){
              let charge = ((kms * 214) + 20000).toLocaleString("en", {   
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


