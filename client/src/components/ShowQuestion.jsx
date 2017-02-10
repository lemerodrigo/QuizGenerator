import React from 'react';
import ShowAnswer from './ShowAnswer.jsx';

const ShowQuestion = () => (
  <div className="question panel panel-default">

    <div className="question-desc panel-heading">
      <h3 className="panel-title">Isn't this a very mind-blowing quiz question being asked?</h3>
    </div>

    <div className="panel-body answer">
      <ShowAnswer/>
      <ShowAnswer/>
      <ShowAnswer/>
    </div>

  </div>
)

export default ShowQuestion;

