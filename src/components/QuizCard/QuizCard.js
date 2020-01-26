import React from 'react'
import { Question } from '../Question'
import { OptionsList } from '../OptionsList'

const QuizCard = ({ question, questionIdx }) => {
  console.log(question.title)
  return (
    <div className="card">
      <Question title={ question.title } />
      <OptionsList options={ question.options } questionIdx={questionIdx}/>
    </div>
  )
}

export default QuizCard