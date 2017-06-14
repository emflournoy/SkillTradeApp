"use strict";

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const knex = require('../knex');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// router.use(function(req,res,next){
//
// })


router.post('/login', function(req,res,next){
  knex('users')
  .insert(req.body, '*')
  .then((result)=>{
    return res.send(result.id);
  })
  .catch((err)=>{
    return res.status(400).send(err);
  });

});

router.get('/login/:id', (req, res, next)=>
{
  knex('users')
  .where('login', req.params.id)
  .then((data)=>{
    var cookie = req.cookies.cookieName;
    if (cookie === undefined) {
      res.cookie('userID', data[0]['id'], {httpOnly: true});
    }
    // res.cookie('userID', data[0]['id'], {httpOnly: true});
    return res.send(data[0]);
  })
  .catch((err)=>{
    res.status(400).send(err);
  });
});
module.exports = router;
