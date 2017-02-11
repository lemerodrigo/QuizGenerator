import React from 'react';
import { Link } from 'react-router';
import ShowQuestion from './ShowQuestion.jsx';

class ShowQuiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quiz: {
        questions: [],
      },
    };
  };

  componentDidMount() {
    fetch(`/api/quizzes/${this.props.params.id}`)
      .then((response) => {
        return response.json();
      })
      .then((quiz) => {
        this.setState({ quiz });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {

    const showQuestionArr = this.state.quiz.questions.map((q, i) => {
      return (
        <ShowQuestion
          key={q.id}
          question={q.question}
          answers={q.answers}
        />
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">

            <h2>{this.state.quiz.name}</h2>
            <h5>{this.state.quiz.description}</h5>
            <h5>Link to quiz: <Link target='_blank' to={`/quiz/${this.state.quiz.link}`}>{this.state.quiz.link}</Link></h5>

            <hr/>

            <h5>Enter your full name:</h5>
            <div className="quiz-take-name-input">
              <input type="text" className="form-control" placeholder="Full Name" />
            </div>

            <hr/>

            {showQuestionArr}

            <hr/>

            <button type="button" className="btn btn-primary btn-lg btn-block">Submit</button>

          </div>
        </div>
      </div>
    );
  }
}

export default ShowQuiz;
