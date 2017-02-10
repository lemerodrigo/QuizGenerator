import React from 'react';
import { Link } from 'react-router';

const Quizzes = ({ quizzes }) => (
  <div>
    <h2>List quizzes here</h2>
    {quizzes}
  </div>
);

export default Quizzes;
