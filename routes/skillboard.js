'use strict';

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const knex = require('../knex');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');


router.get('/skillboard',function(req,res,next){
  knex('skill_cards')
    // .orderBy('id')
    .join('users', 'user_id', 'users.id')
    .join('categories', 'categories_id', 'categories.id')
    .then(function(result){
      console.log(result);
      return res.send(result);
    });
});





module.exports = router;
