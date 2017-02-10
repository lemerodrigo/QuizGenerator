import React from 'react';
import AnswerAdmin from './AnswerAdmin.jsx';

const QuestionAdmin = () => (
  <div className="question panel panel-default">

    <div className="question-desc panel-heading">
      <h3 className="panel-title">Isn't this a very mind-blowing quiz question being asked?</h3>
    </div>

    <AnswerAdmin/>

    <div className="question-controls panel-footer">
      <span className="toggle-order">
        <small>Question Order: <a href="#">-</a>/<a href="#">+</a> </small>
      </span>
      <span className="delete-question">
        <small><a href="#">Del</a></small>
      </span>
    </div>

  </div>
)

export default QuestionAdmin;