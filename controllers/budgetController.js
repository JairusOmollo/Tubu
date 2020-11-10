const app = require('../app');
const nodemailer = require('nodemailer')

exports.getOneHearse = (req, res) => {
  res.render('index')
 };
 
exports.mailer = (req, res) => {
  

  let user= req.session.user
  let charge = req.session.charge
  req.session.hearseSelected

 let hearsesRequested = req.session.hearseSelected
     
  const output = `
  <p>You have a new Customer Budget</p>
  <h3>Customer Budget</h3>
  <ul>  
    <li>origin: ${user.pickUp}</li>
    <li>destination: ${user.dropOff}</li>
    <li>phone number: ${req.body.phone}</li>
    <li>budget ${req.body.budget}</li>
    <li>number plate:${hearsesRequested.numberPlate}</li>
    <li>number plate:${hearsesRequested.mobileNumber}</li>
  </ul>
 
`;

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
      user: 'gernetj@gmail.com', // generated ethereal user
      pass: 'felicity2'  // generated ethereal password
  },
  tls:{
    rejectUnauthorized:false
  } 
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"Tubu " <gernetj@gmail.com>', // sender address
    to: 'gernetj@gmail.com', // list of receivers
    subject: 'Tubu-Customer-request', // Subject lin
    html: output // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);   
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

   // res.render('contact', {msg:'Email has been sent'});
});


res.status(204).send()

 }
 
