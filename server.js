const mongoose= require('mongoose');


const app = require('./app');


console.log(process.env)
const DB = process.env.DATABASE.replace('PASSWORD', process.env.DATABASE_PASSWOWORD);
mongoose.connect(DB, {
  useNewUrlParser:true,
  useCreateIndex:true,
  useFindAndModify:false,
  useUnifiedTopology: true
}).then(() => {
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
  console.log(`app running on port ${port}...`);
});
  console.log('DB connection succesful!')
}).catch(error =>{
console.log(error)
})

;





