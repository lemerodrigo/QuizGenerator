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
    this.handleNewAnswerChange = this.handleNewAnswerChange.bind(this);
  }

  handleTitleChange(e) {
    this.setState({ 
      quizTitle: e.target.value 
    });
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
      console.log('newQ:', this.state.newQuestion);
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
    const updateNewAnswers = this.state.newAnswers.slice();
    updateNewAnswers[e.target.dataset.question] = e.target.value;
    this.setState({
      newAnswers: updateNewAnswers,
    }, () => console.log('new Answers:', this.state.newAnswers));
  }

  makeNewAnswer(e) {
    e.preventDefault();
    const updateAnswers = this.state.answers.slice();
    if (!updateAnswers[e.target.dataset.question]) {
      updateAnswers[e.target.dataset.question] = [];
    }
    updateAnswers[e.target.dataset.question].push(this.state.newAnswers[e.target.dataset.question]);
    this.setState({
      answers: updateAnswers,
      newAnswers: [],
    }, () => console.log('Answers:', this.state));
  }

  initializeState() {
    // if this is a pre-existing quiz, set state
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createQuiz(e, this.state);
  }

  render() {
    const questions = this.state.questions ? this.state.questions : [];
    const questionsArr = questions.map((question, i) => (<QuestionAdmin
      questionKey={i}
      question={question}
      answers={this.state.answers[i]}
      makeNewAnswer={this.makeNewAnswer}
      handleNewAnswerChange={this.handleNewAnswerChange}
    />));

    return (
      <div className="editing-surface container">
        <div className="row">
          <div className="quiz col-sm-6 col-sm-offset-3">
            <h1>Create new quiz</h1>
            <form onSubmit={this.handleSubmit}>

              <div className="quiz-title">
                <div className="quiz-title-input">
                  <input
                    className="form-control"
                    name="quiz-name"
                    type="text"
                    onChange={this.handleTitleChange}
                    value={this.state.quizTitle}
                    placeholder="Title" />
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
                    placeholder="Description">
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
