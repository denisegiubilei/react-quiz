import React from 'react'
import { Question } from '../Question'
import { OptionsList } from '../OptionsList'

const QuizCard = ({ quiz, index }) => {
  return (
    <div className="card">
      <Question question={ quiz.question } />
      <OptionsList options={ quiz.options } answered={ quiz.answered } index={ index } />
    </div>
  )
}

export default QuizCard