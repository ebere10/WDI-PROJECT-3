//Seed file for users

//require mongoose
const mongoose = require('mongoose');

//connect to the clemenetine database
const databaseUrl = 'mongodb://localhost:27017/Clementine';
//connect mongoose
mongoose.connect(databaseUrl);

//require models
const User    = require('../models/user');
const Company = require('../models/company')

//drop db
User.collection.drop();
Company.collection.drop();

const