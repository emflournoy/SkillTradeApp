"use strict";

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const knex = require('../knex');
const bodyParser = require('body-parser');


router.post('/login', function(req,res,next){
  console.log(req.body);
  console.log(req.cookies);
  knex('users').where('login', req.body.login).then(function(result){
    
    if(result.length === 0){
      post(req.body);
    }
    else{
      console.log(result, "found them");
      return res.sendStatus(200);
    }
  }).catch(function(err){
      console.log(err, "DIDNT WORK");
  })

  function post(info){
    console.log("in the post function", info);
    knex('users')
    .insert(info, '*')
    .then((result)=>{
      res.cookie('userID', req.cookies.userID, {httpsOnly: true});
      console.log(result, "it was posted goodly");
      return res.send(result.id);
    })
    .catch((err)=>{
      console.log(err, "errored out");
      res.send(err)
      //console.log("there was an error");
      //return res.status(400).send(err);
    });
  }
});

router.get('/login/:id', (req, res, next)=>
{
  knex('users')
  .where('login', req.params.id)
  .then((data)=>{
    console.log(data);
    res.cookie('userID', data[0]['id'], {httpOnly: true});
    return res.send(data[0]);
  })
  .catch((err)=>{
    res.status(400).send(err);
  });
});
module.exports = router;
