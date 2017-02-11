import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
const AuthService = require('./../classes/AuthService');
const auth = new AuthService();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzes: [],
      loggedIn: true, // change this back to false
      user: null,
    };
    this.updateState = this.updateState.bind(this);
    this.getState = this.getState.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.createQuiz = this.createQuiz.bind(this);
  }

  getState() {
    return this.state;
  }

  updateState(stateObj) {
    this.setState(stateObj);
  }

  componentDidMount() {
    fetch('/api/quizzes')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        // console.log(data);
        this.setState({ quizzes: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  login(e) {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    auth.login(email, password)
      .then((data) => {
        if (data.id) {
            let updateStateData = {
                user: data,
                loggedIn: true,
            };
            this.setState(updateStateData, () => {
              this.props.router.push('/quizzes');
            });
        } else {
            console.log('LOGIN FAILED');
            e.target.password.value = 'wrong password';
        }
      })
      .catch((err) => {
        console.log('Error logging in', err);
      });
  }

  logout() {
    this.setState({
      loggedIn: false,
      user: null,
    });
  }

  createQuiz(e) {
    let questions = [];
    let answers = [];

    let data = {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'same-origin',
      body: JSON.stringify({
        name: name,
        description: description,
        questions: questions,
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }
    return fetch('/api/quizzes', data)
      .then(response => response.json()) // update state and redirect to another page
      .catch((err) => {
        console.log(err);
      }); 
  }

  render() {
    return (
      <div>
        <Navbar loggedIn={this.state.loggedIn} />
        {React.cloneElement(this.props.children, {
          quizzes: this.state.quizzes,
          loggedIn: this.state.loggedIn,
          updateState: this.updateState,
          getState: this.getState,
          login: this.login,
          logout: this.logout,
        })}
      </div>
    );
  }
}

export default App;
