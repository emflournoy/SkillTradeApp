"use strict";

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const knex = require('../knex');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');

router.get('/profile/:id', (req, res, next)=>{
  knex('users')
    .where('id', req.params.id)
    .then(function(result){
      console.log(result);
      return res.send(result);
    });
});

router.post('/profile', (req, res, next)=>{
  knex('users')
    .insert(req.body, '*')
    .then(function(result){
      return res.send(result);
    })
    .catch((err)=>{
      return res.status(400).send(err);
    });
});

router.patch('/profile/:id', (req,res,next) => {
  knex('users')
    .where('id', req.params.id)
    .update(req.body, '*')
    .then(function(result){
      return res.send(result);
    })
    .catch((err)=>{
      return res.status(400).send(err);
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
