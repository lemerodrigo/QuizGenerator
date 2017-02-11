const Sequelize = require('sequelize');
const db = require('./db');

const Response = db.define('response', {
  name: Sequelize.STRING,
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  }
}, {
  timestamps: false,
});

module.exports = Response;
