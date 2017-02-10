import React from 'react';

const AnswerAdmin = () => (
  <div className="panel-body">
    <div className="answer">
      <div className="radio answer-desc">
      <label>
        <input type="radio" name="optionsRadios" value="" />
        An answer goes here.
      </label>
      </div>
    </div>

    <div className="answer-controls">
      <div className="input-answer input-group">
        <input type="text" className="form-control" placeholder="New Answer" />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-default">Submit</button>
        </span>
      </div>
    </div>
  </div>
)

export default AnswerAdmin;
