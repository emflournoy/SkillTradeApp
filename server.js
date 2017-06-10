'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const skillboard = require('./routes/skillboard');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(skillboard);
app.use((_req, res) => {
  res.sendStatus(404);
});


switch (app.get('env')) {
  case 'development':
    app.use(morgan('dev'));
    break;

  case 'production':
    app.use(morgan('short'));
    break;

  default:
}

if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

app.get('/', (req, res, next)=>{
  res.render('index');
});

app.listen(3000, function(){
  console.log("listening on port 3000");
});

module.exports = app;
