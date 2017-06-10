'use strict';

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const knex = require('../knex');
const bodyParser = require('body-parser');


router.get('/skillboard',function(req,res,next){
  knex('skill_cards')
    .select(
      '*'
    )
    .orderBy('id')
    .then(function(result){
      return res.send(result);
    });
});


module.exports = router;
