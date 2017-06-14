"use strict";

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const knex = require('../knex');
const bodyParser = require('body-parser');


router.post('/login', function(req,res,next){
  console.log(req.body, "req.body");
  knex('users')
  .insert(req.body, '*')
  .then((result)=>{
    console.log(result[0]);
    // res.cookie('userID', result[0]['id'], {httpsOnly: true});
    return res.send(result.id);
  })
  .catch((err)=>{
    console.log(err, "this ERROR");
    return res.status(400).send(err);
  });
});

router.get('/login/:id', (req, res, next)=>
{
  knex('users')
  .where('login', req.params.id)
  .then((data)=>{
    res.cookie('userID', data[0]['id'], {httpOnly: true});
    return res.send(data[0]);
  })
  .catch((err)=>{
    res.status(400).send(err);
  });
});
module.exports = router;
