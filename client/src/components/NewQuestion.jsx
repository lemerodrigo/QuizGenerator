import React from 'react';

const NewQuestion = (props) => {

  return (
    <div className="question-new panel panel-default">
      <div className="editor-nav panel-body input-group">
        <input
          onChange={props.handleNewQuestionChange}
          type="text"
          className="form-control"
          placeholder="New Question"
          value={props.newQuestion}
        />
        <span className="input-group-btn">
          <button
            onClick={props.makeNewQuestion}
            className="btn btn-default">
            Add New Question
          </button>
        </span>
      </div>
    </div>
  )
}

export default NewQuestion;