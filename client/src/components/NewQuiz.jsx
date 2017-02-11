import React from 'react';
import QuestionAdmin from './QuestionAdmin.jsx';
import NewQuestion from './NewQuestion.jsx';

class NewQuiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quizTitle: '',
      quizDesc: '',
      questions: [],
      answers: [],
      newQuestion: '',
      newAnswers: [],
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.initializeState = this.initializeState.bind(this);
    this.makeNewQuestion = this.makeNewQuestion.bind(this);
    this.makeNewAnswer = this.makeNewAnswer.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleNewQuestionChange = this.handleNewQuestionChange.bind(this);
  }

  handleTitleChange(e) {
    this.setState({ 
      quizTitle: e.target.value 
    }, () => console.log('Quiz Title', this.state.quizTitle));
  }

  handleDescChange(e) {
    this.setState({ 
      quizDesc: e.target.value 
    }, () => console.log('Quiz Desc', this.state.quizDesc));
  }

  handleNewQuestionChange(e) {
    this.setState({ 
      newQuestion: e.target.value 
    }, () => {
      if (e.keyCode === 13) {
        this.makeNewQuestion(e);
      }
    });
  }

  makeNewQuestion(e) {
    e.preventDefault();
    const newQuestions = this.state.questions.slice();
    newQuestions.push(this.state.newQuestion);
    this.setState({
      questions: newQuestions,
      newQuestion: '',
    }, () => console.log('questions:', this.state.questions));
  }

  handleNewAnswerChange(e) {
    const newAnswers = this.state.answers.slice();
    newAnswers[e.target.key] = this.target.value;
    this.setState({
      newAnswers: newAnswers
    }, () => console.log('questions:', this.state.answers));
  }

  makeNewAnswer(e) {
    this.setState({

    })
  }

  initializeState() {
    // if this is a pre-existing quiz, set state
  }

  handleSubmit(e) {
    e.preventDefault();

    
  }

  

  render() {
    console.log('questions', this.state.questions);
    const questions = this.state.questions ? this.state.questions : [];
    const questionsArr = questions.map((question, i) => (<QuestionAdmin
      key={i}
      question={question}
      answers={this.state.answers[i]}
      makeNewAnswer={this.makeNewAnswer}
    />));

    return (
      <div className="editing-surface container">
        <div className="row">
          <div className="quiz col-sm-6 col-sm-offset-3">

            <form onSubmit={this.handleSubmit}>

              <div className="quiz-title">
                <div className="quiz-title-input">
                  <input
                    className="form-control"
                    name="quiz-name"
                    type="text"
                    onChange={this.handleTitleChange}
                    value={this.state.quizTitle}
                    placeholder="Quiz Title" />
                </div>
              </div>

              <div className="quiz-desc">
                <br />
                <div className="quiz-desc-input">
                  <textarea
                    className="form-control"
                    name="quiz-desc"
                    rows="3"
                    onChange={this.handleDescChange}
                    value={this.state.quizDesc}
                    placeholder="Quiz Description">
                  </textarea>
                  <br />
                </div>
              </div>

              {questionsArr}
              <NewQuestion
                newQuestion={this.state.newQuestion}
                handleNewQuestionChange={this.handleNewQuestionChange}
                makeNewQuestion={this.makeNewQuestion} />

              <button type="submit" className="btn btn-primary btn-lg btn-block">Save Quiz</button>

            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default NewQuiz;
