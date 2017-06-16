"use strict";

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const knex = require('../knex');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const FB = require('fb');



router.get('/profile', function(req, res, next) {
  var cookiearray = (Object.keys(req.session));
  if (cookiearray.length === 0){
    console.log("no cookies server side for skillmanager");
    return res.send("no cookies")
  }
  else {
    next();
  }
});

router.get('/profile', (req, res, next)=>{
  knex('users')
    .where('id', 11)
    .then(function(result){
      console.log(result);
      return res.send(result);
    });
});


router.patch('/profile', (req,res,next) => {
  req.body.login = parseInt(req.body.login);
  req.body.zip = parseInt(req.body.zip);
  knex('users')
    .where('login', req.body.login)
    .update(req.body, '*')
    .then(function(result){
      return res.send(result);
    })
    .catch((err)=>{
      return res.send(err);
    });
})

router.delete('/profile/:id', (req,res,next) => {
  knex('users')
    .where('id', req.params.id)
    .returning('*')
    .del()
    .then(function(result){
      return res.send(result);
    })
    .catch((err)=>{
      return res.status(400).send(err);
    });
})


module.exports = router;
