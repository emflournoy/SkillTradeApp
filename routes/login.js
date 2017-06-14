"use strict";

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const knex = require('../knex');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');



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
  .then((data) => {
    req.session.userID=data[0]['id'];
    console.log(req.session);
    return res.send(data[0]);
  })
  .catch((err)=>{
    console.log('err');
    res.status(400).send(err);
  });
});
module.exports = router;
