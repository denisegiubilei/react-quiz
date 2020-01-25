import React, { createContext, Component } from 'react'
import quizData from '../data/quiz'

const QuizContext = createContext()
const { Provider, Consumer } = QuizContext

const originalQuiz = JSON.parse(JSON.stringify(quizData));

class MyProvider extends Component {

  state = { 
    quiz: [...quizData],
    finished: 0,
    points: 0
  } 

  addPoint = option => {
    let { points, finished } = this.state
    if (option.correct) points++
    finished++
    this.setState({ points, finished })
  }

  update = quiz => {
    this.setState({ quiz })
  }

  refresh = () => {
    this.setState({ 
      quiz: JSON.parse(JSON.stringify(originalQuiz)),
      finished: 0,
      points: 0
    })
  }

  render () {
    const { Provider } = QuizContext
    return (
      <Provider 
        value = {{
          state: this.state,
          refresh: this.refresh,
          update: this.update,
          addPoint: this.addPoint
        }}
      >
        { this.props.children }
      </Provider>
    )
  }
}

export {
  QuizContext,
  MyProvider,
  Consumer,
  Provider
}