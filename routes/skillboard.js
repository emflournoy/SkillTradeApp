'use strict';

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const knex = require('../knex');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');


router.get('/skillboard',function(req,res,next){
  knex('skill_cards')
    .select('skill_cards.contact','skill_cards.title','skill_cards.description','skill_cards.photo','categories.type AS cat','environment.type AS env', 'skill_cards.id')
    .join('categories', 'skill_cards.categories_id', 'categories.id')
    .join('environment','skill_cards.environment_id', 'environment.id')
    .then(function(result){
      console.log(result);
      return res.send(result);
    })
    .catch(function(err){
      console.log(err);
    })
});





module.exports = router;
