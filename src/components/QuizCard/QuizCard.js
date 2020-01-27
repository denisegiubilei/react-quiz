import React from 'react'
import { Question } from '../Question'
import { OptionsList } from '../OptionsList'

const QuizCard = React.forwardRef(({ question, questionIdx, autoscroll }, ref) => {
  
  const _autoscroll = () => autoscroll(questionIdx)
  
  return (
    <div className="card" ref={ref}>
      <Question title={question.title} img={question.img} />
      <OptionsList 
        options={question.options} 
        questionIdx={questionIdx}
        autoscroll={_autoscroll}
      />
    </div>
  )
})

export default QuizCard