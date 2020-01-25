import React from 'react'
import { Question } from '../Question'
import { OptionsList } from '../OptionsList'

const QuizCard = ({ quiz, index }) => {
  return (
    <div className="card" style={{ maxWidth: "500px"}}>
      <Question question={ quiz.question } />
      <div className="list-group">
        <OptionsList options={ quiz.options } answered={ quiz.answered } index={ index } />
      </div>
    </div>
  )
}

export default QuizCard