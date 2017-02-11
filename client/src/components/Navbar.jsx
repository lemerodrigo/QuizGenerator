import React from 'react';
import { IndexLink, Link } from 'react-router';

const Navbar = () => (
  <div className='navbar navbar-inverse navbar-static-top'>
    <div className='container'>
      <div className='navbar-header'>
        <Link className='navbar-brand' to='/'>Quiz Generator</Link>
      </div>
      <ul className='nav navbar-nav navbar-right'>
        <li><Link to='/quizzes'>Quizzes</Link></li>
        <li><Link to='/quizzes/new'>Create a New Quiz</Link></li>
        <li><Link to='/'>Log Out</Link></li>
      </ul>
    </div>
  </div>
);

export default Navbar;
