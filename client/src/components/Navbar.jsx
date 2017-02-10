import React from 'react';
import { IndexLink, Link } from 'react-router';

const Navbar = () => (
  <div className='main-nav container'>
    <span><Link to='/'>Home</Link> | </span>
    <span><Link to='/quizzes'>Quizzes</Link> | </span>
    <span><Link to='/quizzes/new'>Create a New Quiz</Link> | </span>
    <span><Link to='/'>Log Out</Link></span>
  </div>
);

export default Navbar;
