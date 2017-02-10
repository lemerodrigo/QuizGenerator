const Sequelize = require('sequelize');
const db = require('./db');

const Quiz = db.define('quiz', {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
});

module.exports = Quiz;
