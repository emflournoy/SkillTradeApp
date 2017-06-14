'use strict';

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const knex = require('../knex');
const bodyParser = require('body-parser');


router.get('/skillboard',function(req,res,next){
  knex('skill_cards')
    .join('users', 'user_id', 'users.id')
    .join('categories', 'categories_id', 'categories.id')
    .then(function(result){
      console.log(result);
      return res.send(result);
    })
    .catch(function(err){
      console.log(err);
    })
});





module.exports = router;
