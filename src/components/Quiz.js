import React, { Component } from 'react'
import { Consumer } from './MyProvider'

import Results from './Results'
import QuizCard from './QuizCard'

class Quiz extends Component {
  render() {
    return (
      <Consumer>
        { 
          context => (
            <>
              { context.state.quiz.map((el, index) =>
                <QuizCard quiz={ el } key={ index } index={index} />
              )}
              { context.state.finished === context.state.quiz.length ? <Results /> : '' }
            </>
          )
        }
  
      </Consumer>
    )
  }
}

export default Quiz