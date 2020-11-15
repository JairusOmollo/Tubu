const path = require ('path')
const express = require('express');
const Distance = require('./models/Getplaces');

const cors = require('cors')
const axios = require('axios');
const store = require ('./models/SessionsStore')
const hearsesRouter = require('./routes/hearsesRoutes')
const kmsRouter = require('./routes/kmsRoutes')
const budgetRouter = require('./routes/budgetRoutes')
const bodyParser = require('body-parser');
const session = require('express-session')
const MongoStore = require ('connect-mongo')(session)
const { check, validationResult } = require('express-validator');
const compression = require('compression')


    //start express app
const app = express();

//register view engine
app.set('view engine', 'ejs');



//middleware and static files
app.use(cors())
console.log(__dirname, 'public' )
app.use(express.static(path.join(__dirname, '/public/css')))
app.use(express.static(path.join(__dirname, '/public/js')))
app.use(express.static(path.join(__dirname, '/public/img')))


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret token',
    resave: false,
    saveUninitialized: true,
    unset: 'destroy',
    store: store,
    name: 'session cookie name',
    
}));

app.use(compression());

//ROUTES
app.use('/api/v1/hearses', hearsesRouter)
app.use('/api/v1/kms', kmsRouter)
app.use('/api/v1/sendbudget', budgetRouter)
app.use('/', budgetRouter )





module.exports = app;

