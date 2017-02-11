import React from 'react';
import { Link } from 'react-router';

const Quizzes = (props) => {
  const quizzes = props.quizzes.map((quiz) => {
    return <h5 key={quiz.id}><Link className="list-group-item" to={`/quizzes/${quiz.id}`}>{quiz.name}: {quiz.description}</Link></h5>
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <h2>All quizzes</h2>
          <div className="list-group">
            {quizzes}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quizzes;
