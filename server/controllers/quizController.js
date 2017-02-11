const express = require('express');
const router = express.Router();
const db = require('../models/db');
const Models = require('../models');

// get all quizzes
function findAll(req, res, next) {
  Models.Quiz.findAll({}).then((quizzes) => {
    return res.status(200).json(quizzes);
  }).catch((err) => {
    next(err);
  });
}

// add quiz
function addOne(req, res, next) {
  const quizToAdd = {
    name: req.body.name,
    description: req.body.description,
  };

  Models.Quiz
    .create(quizToAdd)
    .then((quiz) => {
      // also create answers
      // only need to send back quiz info - then update state
      console.log('new quiz created');
      console.log(quiz);
      res.status(200).send(quiz);
    })
    .catch((err) => {
      next(err);
    });
}

// get one quiz
function findOne(req, res, next) {
  let parsedQuiz;

  db.query(`SELECT * FROM quizzes WHERE id = ${req.params.id}`)
    .then((quiz) => {
      parsedQuiz = quiz[0][0];
      parsedQuiz.name = quiz[0][0].name;
      parsedQuiz.description = quiz[0][0].description;
      parsedQuiz.id = quiz[0][0].id;
      parsedQuiz.link = quiz[0][0].link;

      return quiz[0][0];
    })
    .then((quiz) => {
      return db.query(`SELECT * FROM questions WHERE "quizId" = ${quiz.id}`);
    })
    .then((questions) => {
      parsedQuiz.questions = [];
      questions[0].forEach((question) => {
        parsedQuiz.questions.push({
          id: question.id,
          question: question.question,
          description: question.description,
          answers: [],
        });
      });

      return questions[0];
    })
    .then((questions) => {
      const prom = questions.map((question) => {
        return db.query(`SELECT * FROM answers WHERE "questionId" = ${question.id}`).then((answers) => {
          return answers[0];
        });
      });

      return Promise.all(prom);
    })
    .then((arrOfObjects) => {
      parsedQuiz.questions.forEach((question, index) => {
        arrOfObjects[index].forEach((answer) => {
          question.answers.push(answer.answer);
        });
      });

      res.status(200).json(parsedQuiz);
    })
    .catch((err) => {
      next(err);
    });
}

function updateOne(req, res, next) {

}

function deleteOne(req, res, next) {

}

module.exports = {
  findAll,
  addOne,
  findOne,
  updateOne,
  deleteOne,
};
