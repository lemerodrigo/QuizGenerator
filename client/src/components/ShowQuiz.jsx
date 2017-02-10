import React from 'react';
import { Link } from 'react-router';
import ShowQuestion from './ShowQuestion.jsx';

const ShowQuiz = (props) => {
  console.log(props.params.id);
  const quiz = props.quizzes.find(quiz => quiz.id === Number(props.params.id));

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">

          <h2>{quiz && quiz.name}</h2>
          <h5>{quiz && quiz.description}</h5>

          <hr/>

          <h5>Enter your full name:</h5>
          <div className="quiz-take-name-input">
            <input type="text" className="form-control" placeholder="Full Name" />
          </div>

          <hr/>

          <ShowQuestion/>
          <ShowQuestion/>
          <ShowQuestion/>
          
        </div>
      </div>
    </div>
  );
}

export default ShowQuiz;
