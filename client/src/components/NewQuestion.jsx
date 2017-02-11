import React from 'react';

const NewQuestion = () => (
  <div className="question-new panel panel-default">
    <div className="editor-nav panel-body input-group">
      <input type="text" className="form-control" placeholder="New Question" />
      <span className="input-group-btn">
        <button type="submit" className="btn btn-default">Submit</button>
      </span>
    </div>
  </div>
)

export default NewQuestion;