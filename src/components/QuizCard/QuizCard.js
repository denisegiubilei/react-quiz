import React from 'react'
import { Question } from '../Question'
import { OptionsList } from '../OptionsList'

const QuizCard = ({ question, questionIdx }) => {
  return (
    <div className="card">
      <Question title={question.title} img={question.img} />
      <OptionsList options={question.options} questionIdx={questionIdx}/>
    </div>
  )
}

export default QuizCard