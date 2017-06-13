"use strict";

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const knex = require('../knex');
const bodyParser = require('body-parser');



router.post('/login', function(req,res,next){
  console.log(req.body);
  knex('user')
  .insert(req.body, '*')
  .then(function(result){
    console.log(result);
    return res.send(result);
  })
  .catch((err)=>{
    res.send(req.body);
    // return res.status(400).send(err);
  });
});


module.exports = router;
