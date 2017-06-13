"use strict";

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const knex = require('../knex');
const bodyParser = require('body-parser');


//FORM DROPDOWNS (arr of 2arr of objs)====================
router.get('/skillManager', function(req, res) {

  let allArr = [];
  knex('categories')
  .then((data)=>{
    allArr.push(data);
    knex('environment')
      .then((data2)=>{
        allArr.push(data2);
        res.send(allArr);
      })
    })
  });


router.get('/skillManager', (req, res, next)=>{
  knex('skill_cards')
    .join('users', 'user_id', 'users.id')
    .then(function(result){
      console.log(result);
      return res.send(result);
    });
});

router.post('/skillManager', (req, res, next)=>{
  req.body.user_id = Number(req.cookies.userID);
  console.log(req.body);
  knex('skill_cards')
    .insert(req.body, '*')
    .then(function(result){
      console.log(result);
      return res.send(result);
    })
    .catch((err)=>{
      return res.status(400).send(err);
    });
});

// router.patch('/skillManager/:skill_card_id', (req,res,next) => {
//   knex('skill_cards')
//     .where('id', req.params.skill_card_id)
//     .update(req.body, '*')
//     .then(function(result){
//       return res.send(result);
//     })
//     .catch((err)=>{
//       return res.status(400).send(err);
//     });
// })

router.delete('/skillManager/:skill_card_id', (req,res,next) => {
  knex('skill_cards')
    .where('id', req.params.skill_card_id)
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
