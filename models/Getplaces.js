const axios = require('axios')


  class Distance{
      constructor(begin,end){
          this.begin=begin;
          this.end=end;
          this.getDistance=this.getDistance.bind(this)
         
       
          
        
          
      }

 async getDistance() {

      try{ 
        const start = `${this.begin}`
              const finish = `${this.end}`;
              const res = await axios(`https://maps.googleapis.com/maps/api/distancematrix/json`, {
              params: {
                origins:start,
                destinations: finish,
                key: 'AIzaSyAbOe26YTEQ8sa8fBBGA7pLDhr7JghjmpI',
              }
              
            
              
            })
            
             this.result =  res.data.rows[0].elements[0].distance.value /1000
             
            
           
            
          
      } catch(error){
        console.log(error);
      }

      return this.result


      


        
     }
    
  }

  
   module.exports = Distance

 