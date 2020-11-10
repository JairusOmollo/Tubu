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


      


  //     const start = `${this.begin}`
  //       const finish = `${this.end}`;
  //      const res =  axios(`https://maps.googleapis.com/maps/api/distancematrix/json`, {
  //       params: {
  //         origins:start,
  //         destinations: finish,
  //         key: 'AIzaSyAbOe26YTEQ8sa8fBBGA7pLDhr7JghjmpI',
  //       },
  //     })
  //     .then((response) => {
  //       //const places = response.data.rows[0].elements[0].distance.text;
  //       this.result= response
  //       //console.log(this.result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //  })
   

      //   const key ='AIzaSyAbOe26YTEQ8sa8fBBGA7pLDhr7JghjmpI';

      //   const res=  axios(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${this.begin}&destinations=${this.end}&key=${key}`).then(response =>{
      //     this.result = response.data.rows[0].elements[0].distance.value
      //     console.log(this.result)
          
          
        
      //   }) .catch((error) => {
      //     console.log(error);
      // }); 
        
    //    // const res= await axios('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?origin='+ start + '&destination='+ end +'&v=3&key=AIzaSyAbOe26YTEQ8sa8fBBGA7pLDhr7JghjmpI');
        
     }
    
  }

  
   module.exports = Distance

 