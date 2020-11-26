const app = require('../app');
const Hearse = require ('./../models/GetHearses');






 exports.getAllHearses =  (req, res) => {
   Hearse.find(req.query).then((result) => {

      let vehicle = JSON.stringify(req.query);
      let van = JSON.stringify({vehicle:'Van'})
      let bus = JSON.stringify({vehicle:'Bus'})
      let wagon = JSON.stringify({vehicle:'Wagon'})
      let user= req.session.user;
      let kms = user.kms;
      

    // Calculates Van charges
     function calculateVanCharge(){
        let charge = user.kms * 110 
       
        if (charge <= 8000){
          let charge = (8000).toLocaleString("en", {   
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        })
        req.session.charge = charge 
        res.render('hearses', {hearses:result, users:user, charges:charge })  
        }
        else if (charge > 40000){
          let charge = (40000).toLocaleString("en", {   
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        })
        req.session.charge = charge
        res.render('hearses', {hearses:result, users:user, charges:charge })  
        } 

       else { 
        let charge = (user.kms * 110 ).toLocaleString("en", {   
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
      })
        req.session.charge = charge 
        res.render('hearses', {hearses:result, users:user, charges:charge })
      }
      
      }
      // Calculates Bus charges

      function calculateBusCharge(){
      let charge = user.kms * 214 
      
      if (charge <= 30000){
        let charge = ((kms * 214) + 20000).toLocaleString("en", {   
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
      })
      req.session.charge = charge   
      res.render('hearses', {hearses:result, users:user, charges:charge }) 
      }
      else if (charge > 70000){
        let charge = (70000).toLocaleString("en", {   
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
      })
        req.session.charge = charge   
        res.render('hearses', {hearses:result, users:user, charges:charge })  
      } 

      else { 
        let charged = charge.toLocaleString("en", {   
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
      })
        req.session.charge = charged   
        res.render('hearses', {hearses:result, users:user, charges:charged })
      
    }
  }
      function calculateWagonCharge(){
        let charge = user.kms * 160 
       
        if (charge <= 27000){
          let charge = (8000 + 15000).toLocaleString("en", {   
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        })
        req.session.charge = charge 
        res.render('hearses', {hearses:result, users:user, charges:charge })  
        }
        else if (charge > 60000){
          let charge = (60000).toLocaleString("en", {   
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        })
        req.session.charge = charge
        res.render('hearses', {hearses:result, users:user, charges:charge })  
        } 

       else { 
        let charge = (user.kms * 110 ).toLocaleString("en", {   
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
      })
        req.session.charge = charge 
        res.render('hearses', {hearses:result, users:user, charges:charge })
      }
      
      }
      // Calculates Bus charges

      function calculateBusCharge(){
      let charge = user.kms * 214 
      
      if (charge <= 30000){
        let charge = ((kms * 214) + 20000).toLocaleString("en", {   
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
      })
      req.session.charge = charge   
      res.render('hearses', {hearses:result, users:user, charges:charge }) 
      }
      else if (charge > 70000){
        let charge = (70000).toLocaleString("en", {   
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
      })
        req.session.charge = charge   
      res.render('hearses', {hearses:result, users:user, charges:charge },)  
      }
    }

    
   // Render Bus ,Van or Wagon charges  to the view. 

     if(vehicle === van ){
      exports.van = calculateVanCharge() 
      // 2. Calculate wagon charges 
      } else if (vehicle === wagon){
       exports.wagon = calculateWagonCharge()
  
      } else if (vehicle === bus)  {
        exports.bus = calculateBusCharge()    
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