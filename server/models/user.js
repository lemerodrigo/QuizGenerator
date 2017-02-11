const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    // validate: {
    //   isEmail: true
    // }
  },
  password: {
    type: Sequelize.STRING,
    // validate: {
    //   len: [6, 20],
    // }
  },
});

module.exports = User;
