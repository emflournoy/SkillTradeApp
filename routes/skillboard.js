'use strict';

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const knex = require('../knex');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');



//FORM DROPDOWNS (arr of 2arr of objs)====================
router.get('/skillboard', function(req, res, next) {

  let allArr = [];
  knex('categories')
  .then((data)=>{
    allArr.push(data);
    knex('environment')
      .then((data2)=>{
        allArr.push(data2);
        // res.send(allArr);
        req.responseObj = {};
        req.responseObj.allArr = allArr;
        next();
      })
    })
  });


router.get('/skillboard', function(req, res, next) {
  var cookiearray = (Object.keys(req.session));
  if (cookiearray.length == 0){
    console.log("no cookies server side for skillmanager");
    return res.send("no cookies")
  }
  else {
    next();
  }
});



router.get('/skillboard',function(req,res,next){
  knex('skill_cards')
    .select('skill_cards.contact','skill_cards.title','skill_cards.description','skill_cards.photo','categories.type AS cat','environment.type AS env', 'skill_cards.id')
    .join('categories', 'skill_cards.categories_id', 'categories.id')
    .join('environment','skill_cards.environment_id', 'environment.id')
    .then(function(result){
      req.responseObj.skillCards = result;
      console.log(result);
      res.send(req.responseObj);
    })
    .catch(function(err){
      console.log(err);
    })
});







module.exports = router;
