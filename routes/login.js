"use strict";

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const knex = require('../knex');
const bodyParser = require('body-parser');



router.get('/login', function(req,res,next){
  // knex('user').
// return res.send("tried to get me but you cant hahaha");
//   console.log("tried to get me but you cant hahaha");
//   next();
})




module.exports = router;
