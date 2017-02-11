const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();

const quizzes = require('./routes/quizzes');
const users = require('./routes/users');

if (process.env.NODE_ENV === 'development') {
  console.log('DEVELOPMENT MODE');
  console.log('WILL HOT RELOAD CHANGES');
  const webpack = require('webpack');
  const webpackConfig = require('../webpack.config');
  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    // noInfo: true,
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.use('/api/quizzes', quizzes);
app.use('/api/users', users);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json(err);
});

const Models = require('./models');
const quizController = require('./controllers/quizController');
const db = require('./models/db');

app.get('/quiz/:uniqueLink', (req, res, next) => {
  Models.Quiz
    .findOne({
      where: { link: req.params.uniqueLink }
    })
    .then((quiz) => {
      if (!quiz) {
        return res.status(404).send('Not Found');
      }

      db.query(`SELECT * FROM quizzes WHERE id = ${quiz.id}`)
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

    })
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
