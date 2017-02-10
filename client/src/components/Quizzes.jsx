import React from 'react';
import { Link } from 'react-router';

const Quizzes = (props) => {
  const quizzes = props.quizzes.map((quiz) => {
    return <li key={quiz.id}><Link to={`/quizzes/${quiz.id}`}>{quiz.name}: {quiz.description}</Link></li>
  });

  return (
    <div>
      <h2>List quizzes here</h2>
      {quizzes}
    </div>
  );
}

export default Quizzes;
