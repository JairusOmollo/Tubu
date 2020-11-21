const app = require('../app');
const { db } = require('../models/GetHearses');
const Distance = require('./../models/Getplaces')
const store = require ('./../models/SessionsStore')

module.exports.holder= async (req, res ) =>{

  try{  let picky = req.body.origin;
    
   let dropy = req.body.destination;
    //2. Create new distance object with parameters 
   const distance =  new Distance(picky, dropy);
   //3. Calls google api and returns distance in Kilometers
   const alldata = await distance.getDistance();
   //4. Store the results in kms variable .
   
   req.body.kms = alldata
   
  let user = await db.collection('sessions').insertOne({
    pickUp:req.body.origin,
    dropOff:req.body.destination,
    when:req.body.dateOfTravel,
    kms:req.body.kms 
  })
 
    ;
       
  if(user !== null) {
      req.session.user = {
            pickUp: req.body.origin,
            dropOff :req.body.destination,
            when:req.body.date,
            kms:req.body.kms
      };
     
  }   res.status(204).send()

        //  res.redirect('/')

  }catch(error){
    console.log(error)

  }



     }

   

   