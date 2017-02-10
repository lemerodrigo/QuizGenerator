import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

import App from './components/App.jsx';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import Quizzes from './components/Quizzes.jsx';
import NewQuiz from './components/NewQuiz.jsx';
 
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='login' component={Login} />
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='quizzes'>
        <IndexRoute component={Quizzes} />
        <Route path='new' component={NewQuiz} />
      </Route>
    </Route>
  </Router>
), document.getElementById('root'));
