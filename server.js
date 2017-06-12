'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));


switch (app.get('env')) {
  case 'development':
    app.use(morgan('dev'));
    break;

  case 'production':
    app.use(morgan('short'));
    break;

  default:
}


app.use('/',function(req,res,next){
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','*');
  next();
});

app.use(bodyParser.json());


const skillboard = require('./routes/skillboard');
const skillManager = require('./routes/skillManager');
const profile = require('./routes/profile');



app.use(skillboard);
app.use(skillManager);
app.use(profile);



app.use((_req, res) => {
  res.sendStatus(404);
});



app.listen(3000, function(){
  console.log("listening on port 3000");
});



module.exports = app;
