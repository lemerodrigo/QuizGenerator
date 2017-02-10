import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

import App from './components/App.jsx';
import Home from './components/Home.jsx';
import CreateQuiz from './components/CreateQuiz.jsx';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='createquiz' component={CreateQuiz} />
    </Route>
  </Router>
), document.getElementById('root'));
