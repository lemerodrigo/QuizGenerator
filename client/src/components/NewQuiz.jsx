import React from 'react';
import QuestionAdmin from './QuestionAdmin.jsx';
import NewQuestion from './NewQuestion.jsx';

const NewQuiz = () => (
  <div className="editing-surface container">
    <div className="row">
      <div className="quiz col-sm-6 col-sm-offset-3">

        <div className="quiz-title">
          <h2>Quiz Title</h2>
          <div className="quiz-title-input input-group">
            <input type="text" className="form-control" placeholder="Quiz Title" />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-default">Submit</button>
            </span>
          </div>
        </div>

        <div className="quiz-desc">
          <h5>Quiz Description. Lorem ipsum dolar.</h5>
          <div className="quiz-desc-input">
            <textarea className="form-control" rows="3" placeholder="Quiz Description"></textarea><br/>
            <button type="submit" className="btn btn-default">Submit</button>
          </div>
        </div>

        <hr/>

        <QuestionAdmin/>
        <NewQuestion/>

      </div>
    </div>
  </div>
)

export default NewQuiz;
