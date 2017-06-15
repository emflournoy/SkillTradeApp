'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const FB = require('fb');
const port = process.env.PORT || 3000;

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

app.use(cookieSession({
  name: 'session',
  keys: [process.env.COOKIE_KEY]
}));

app.use((req, res, next)=>{
  console.log("look at me: ",req.session.length);
  // if (req.session.length == 0){
  //   res.redirect('/public/index.html')
  //
  // }
    next();
})


const skillboard = require('./routes/skillboard');
const skillManager = require('./routes/skillManager');
const profile = require('./routes/profile');
const login = require('./routes/login');


app.use(express.static(path.join(__dirname, 'public')));

app.use(login);
app.use(skillboard);
app.use(skillManager);
app.use(profile);

// this route reads if they have cookies when the splash page loads. this info is used to changed to login button text from login to continue ----------------------------------
app.get('/continue', function(req,res,next){
  console.log("inside CONTINUE route");
  var cookiearray = (Object.keys(req.session));
  if (cookiearray.length != 0){
    console.log("there is a cookie when going to home page");
    return res.send("yes cookie")
  }
  else if (cookiearray.length == 0){
    return res.send("no cookie")
  }
  else{
    next();
  }
})
//----------------------------------------------------------------------------------------------------------------------------


app.delete('/', (req, res)=>{
  req.session = null;
  console.log(req.session, "please be deleted");
  return res.send(req.session)
})

app.use((_req, res) => {
  res.sendStatus(404);
});

app.listen(port, function(){
  console.log("listening on port", port);
});



module.exports = app;
