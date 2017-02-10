import React from 'react';
import { IndexLink, Link } from 'react-router';

const Navbar = () => (
  <div className='navbar'>
    <Link to='/'>Home</Link>
    <Link to='/quizzes'>Quizzes</Link>
    <Link to='/quizzes/new'>Create new quiz</Link>
  </div>
);

export default Navbar;
