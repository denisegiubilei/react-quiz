import React from 'react'
import { Question } from '../Question'
import { OptionsList } from '../OptionsList'

const QuizCard = React.forwardRef(({ question, questionIdx, handleClick }, ref) => {
  return (
    <div className="card" ref={ref} onClick={() => handleClick(questionIdx)}>
      <Question title={question.title} img={question.img} />
      <OptionsList options={question.options} questionIdx={questionIdx}/>
    </div>
  )
})

export default QuizCard