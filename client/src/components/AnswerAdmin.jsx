import React from 'react';
import ShowAnswer from './ShowAnswer.jsx';

const AnswerAdmin = (props) => {
  console.log('mapthis: ',props.answers);
  const answersArr = props.answers ? props.answers.map(a => (<ShowAnswer answer={a}/>)) : [];

  return (
    <div className="panel-body">
      <div className="answer">
        {answersArr}
      </div>

      <div className="answer-controls">
        <div className="input-answer input-group">
          <input
            onChange={props.handleNewAnswerChange}
            data-question={props.questionKey}
            name={props.questionKey}
            type="text"
            className="form-control"
            placeholder="New Answer"
            value={props.answer}
          />
          <span className="input-group-btn">
            <button
              onClick={props.makeNewAnswer}
              data-question={props.questionKey}
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
