import React from 'react';
import QuestionAdmin from './QuestionAdmin.jsx';
import NewQuestion from './NewQuestion.jsx';

class NewQuiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quizTitle: '',
      quizDesc: '',
      questions: [
        {
          question: "What do cows drink?",
          answers: [
            "Starbucks",
            "Milk",
            "Water",
            "Orange Juice"
          ],
        },
        {
          question: "What do cats drink?",
          answers: [
            "Starbucks",
            "Milk",
            "Water",
            "Scotch"
          ],
        },
        {
          question: "What do dogs drink?",
          answers: [
            "Starbucks",
            "Milk",
            "Water",
            "Beer"
          ],
        },
      ],
      descSet: 'invisible',
      questionCount: 0,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.initializeState = this.initializeState.bind(this);
    this.makeNewQuestion = this.makeNewQuestion.bind(this);
    this.makeNewAnswer = this.makeNewAnswer.bind(this);
  }

  initializeState() {
    // if this is a pre-existing quiz, set state
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({

    })
  }

  makeNewQuestion(e) {
    this.setState({

    })
  }

  makeNewAnswer(e) {
    this.setState({

    })
  }

  render() {

    const questionsArr = this.state.questions ? this.state.questions.map(q => (<QuestionAdmin
      question={q.question}
      answers={q.answers}
      makeNewAnswer={this.makeNewAnswer}
    />)) : [];

    return (
      <div className="editing-surface container">
        <div className="row">
          <div className="quiz col-sm-6 col-sm-offset-3">

            <form onSubmit={this.handleSubmit}>

              <div className="quiz-title">
                <div className="quiz-title-input input-group">
                  <input
                    value={this.state.quizTitle}
                    type="text"
                    className="form-control"
                    placeholder="Quiz Title"
                  />
                  <span className="input-group-btn">
                    <button
                      onClick={this.makeTitle}
                      type="submit"
                      className="btn btn-default"
                      >Submit
                    </button>
                  </span>
                </div>
              </div>

              <div className="quiz-desc">
                <h5 className={this.state.descSet}>{this.state.quizDesc}</h5>
                <div className="quiz-desc-input">
                  <textarea className="form-control" rows="3" placeholder="Quiz Description"></textarea><br/>
                  <button
                    onClick={this.makeDesc}
                    type="submit"
                    className="btn btn-default">
                    Submit
                  </button>
                </div>
              </div>

              <hr/>

              {questionsArr}
              <NewQuestion makeNewQuestion={this.makeNewQuestion}/>

              <button type="submit" className="btn btn-primary btn-block">Save Quiz</button>

            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default NewQuiz;
