const Sequelize = require('sequelize');
const db = require('./db');

const User = require('./user');
const Quiz = require('./quiz');
const Question = require('./question');
const Answer = require('./answer');

Quiz.hasMany(Question);
Question.belongsTo(Quiz);
Question.hasMany(Answer);
Answer.belongsTo(Question);

db.sync();

module.exports = {
  User,
  Quiz,
  Question,
  Answer,
};
