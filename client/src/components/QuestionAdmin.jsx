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
      </div>

    </div>
  )
}

export default QuestionAdmin;