const express = require('express');
const router = express.Router();
const Models = require('../models');

// Method that is going to check the credentials against our database.
function validate(req, res, next) {
  Models.User.findOne({
    where: {
      // We are queryin just the e-mail, then if it returns, we
      // are going to check the stored password.
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
  validate
};
