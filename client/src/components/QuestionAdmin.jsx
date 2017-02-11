import React from 'react';
import AnswerAdmin from './AnswerAdmin.jsx';

const QuestionAdmin = (props) => {
  
  return (
    <div className="question panel panel-default">

      <div className="question-desc panel-heading">
        <h3 className="panel-title">{props.question}</h3>
      </div>

      <AnswerAdmin
        handleNewAnswerChange={props.handleNewAnswerChange}
        questionKey={props.questionKey}
        answers={props.answers}
        makeNewAnswer={props.makeNewAnswer}
      />

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
}

export default QuestionAdmin;