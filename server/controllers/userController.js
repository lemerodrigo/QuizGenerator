const express = require('express');
const router = express.Router();
const Models = require('../models');

function show(req, res) {
  return res.status(200).send('show method inside userController');
}

function validate(req, res, next) {
  Models.User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    const err = new Error('Invalida data.');
    err.status = 500;
    if (!user) {
      next(err);
    } else {
      if (user.password === req.body.password) {
        return res.status(200).json(user);
      } else {
        next(err);
      }
    }
  }).catch((err) => {
    next(err);
  })
}

module.exports = {
  validate,
  show,
};
