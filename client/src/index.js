import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

import App from './components/App.jsx';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import Quizzes from './components/Quizzes.jsx';
import NewQuiz from './components/NewQuiz.jsx';

const requireAuth = (nextState, replace) => {
  // if (!auth.isLoggedIn()) {
  //   replace({ pathname: '/login' })
  // }
  return true;
}

import ShowQuiz from './components/ShowQuiz.jsx';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='login' component={Login} />
    <Route path='/' component={App} onEnter={requireAuth}>
      <IndexRoute component={Home} onEnter={requireAuth} />
      <Route path='quizzes' onEnter={requireAuth}>
        <IndexRoute component={Quizzes} onEnter={requireAuth} />
        <Route path='new' component={NewQuiz} onEnter={requireAuth} />
        <Route path=':id' component={ShowQuiz} onEnter={requireAuth} />
      </Route>
    </Route>
  </Router>
), document.getElementById('root'));
