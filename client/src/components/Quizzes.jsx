import React from 'react';
import { Link } from 'react-router';

const Quizzes = (props) => {
  const quizzes = props.quizzes.map((quiz) => {
    return <Link className="list-group-item" key={quiz.id} to={`/quizzes/${quiz.id}`}><h4>{quiz.name}</h4><p>{quiz.description}</p></Link>
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">

          <h2>Quizzes</h2>
          <div className="list-group">
            {quizzes}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Quizzes;
