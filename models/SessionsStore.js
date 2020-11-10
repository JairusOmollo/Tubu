'use strict'

const express = require('express')
const session = require ('express-session')
const MongoDBStore = require ('connect-mongodb-session')(session)
const dotenv = require('dotenv');
dotenv.config({ path:'./config.env'})



const store = new MongoDBStore({
    uri:process.env.DATABASE.replace('PASSWORD', process.env.DATABASE_PASSWOWORD),
    collection: 'sessions'
});

module.exports = store