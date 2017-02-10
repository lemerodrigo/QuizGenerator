import React from 'react';
import { Link } from 'react-router';

const Quizzes = (props) => {
  const quizzes = props.quizzes.map((quiz) => {
    return <Link className="list-group-item" key={quiz.id} to={`/quizzes/${quiz.id}`}>{quiz.name}: {quiz.description}</Link>
  });

  return (
    <div className="container">
      <h2>Quizzes</h2>
      <div class="list-group">
        {quizzes}
      </div>
    </div>
  );
}

export default Quizzes;
