import React from 'react';
import ShowAnswer from './ShowAnswer.jsx';

const AnswerAdmin = (props) => {
  const answersArr = props.answers ? props.answers.map(a => (<ShowAnswer answer={a}/>)) : [];

  return (
    <div className="panel-body">
      <div className="answer">
        {answersArr}
      </div>

      <div className="answer-controls">
        <div className="input-answer input-group">
          <input
            type="text"
            className="form-control"
            placeholder="New Answer"
            value={props.answer}
          />
          <span className="input-group-btn">
            <button
              onClick={props.makeNewAnswer}
              className="btn btn-default"
              >Add New Answer
            </button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default AnswerAdmin;
