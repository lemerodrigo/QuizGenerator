import React from 'react';

const NewQuestion = (props) => {

  return (
    <div className="question-new panel panel-default">
      <div className="editor-nav panel-body input-group">
        <input
          type="text"
          className="form-control"
          placeholder="New Question"
          value={props.question}
        />
        <span className="input-group-btn">
          <button
            onClick={props.makeNewQuestion}
            type="submit"
            className="btn btn-default"
            >Submit
          </button>
        </span>
      </div>
    </div>
  )
}

export default NewQuestion;