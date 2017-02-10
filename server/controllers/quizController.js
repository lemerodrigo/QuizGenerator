const express = require('express');
const router = express.Router();

const Models = require('../models');

// {
//   results: [
//     {
//       id: 1,
//       name: 'First Quiz',
//       description: 'first quiz in this query',
//       createdAt: 'jahdsajdsad',
//       updatedAt: 'dajhdskjadsjad',
//       questions: [
//         {
//           id: 1,
//           question: 'Do you like hot dogs??',
//           questionType: 'something',
//           description: 'these are like fucking directions',
//           answers: [
//             {
//               id: 1,
//               answer: 'Yes'
//             },
//             {
//               id: 1,
//               answer: 'No'
//             }
//           ]
//         }
//       ]
//     },
//     { quiz 2 },
//     { quiz 3 },
//   ]
// }

// get all quizzes
function findAll(req, res, next) {
  Models.Quiz.findAll({}).then((quizzes) => {
    return res.status(200).json(quizzes);
  }).catch((err) => {
    next(err);
  })
}

// select * from quizzes as qz, questions as qu, answers as an
// where qz.id=1 and qz.id=qu.id and qu.id=an.idi

// add quiz
function addOne(req, res) {

}

// Models.Quiz.create({
//   name: 'second quiz',
//   description: 'description'
// }).then((quiz) => {
//   Models.Question.create({
//     question: 'Do you like hot dogs?',
//     description: 'seriously',
//     quizId: quiz.id
//   }).then((question) => {
//     console.log('quiz and question created');
//   })
// }).catch((err) => {
//   console.log(err);
// });

// Models.Answer.create({
//   answer: 'No',
//   questionId: 1
// });

// get one quiz
function findOne(req, res, next) {

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
