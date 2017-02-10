import React from 'react';
import { IndexLink, Link } from 'react-router';

const Navbar = () => (
  <div className='navbar'>
    <Link to='/'>Home</Link>
    <Link to='/createquiz'>CreateQuiz</Link>
  </div>
);

export default Navbar;
