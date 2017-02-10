import React, { Component } from 'react';
import Navbar from './Navbar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzes: [],
    };
  }

  componentDidMount() {
    fetch('/api/quizzes')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ quizzes: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Navbar />
        {React.cloneElement(this.props.children, { quizzes: this.state.quizzes })}
      </div>
    );
  }
}

export default App;
