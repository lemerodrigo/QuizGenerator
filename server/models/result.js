const Sequelize = require('sequelize');
const db = require('./db');

const Result = db.define('result', {

}, {
  timestamps: false,
});

module.exports = Result;
