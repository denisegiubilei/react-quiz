import React, { Component } from 'react'

import Question from './Question'
import OptionsList from './OptionsList'

class QuizCard extends Component {
  render() {
    return (
      <div className="card" style={{ maxWidth: "500px"}}>
        <Question question={ this.props.quiz.question } />
        <div className="list-group">
          <OptionsList options={ this.props.quiz.options } answered={ this.props.quiz.answered } index={ this.props.index } />
        </div>
      </div>
    )
  }
}

export default QuizCard