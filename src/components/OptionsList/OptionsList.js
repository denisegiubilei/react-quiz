import React from 'react'
import { useStateValue } from '../../context/StateProvider'
import { ACTIONS } from '../../context/QuizReducer'
import { Option } from '../Option'

const OptionsList = ({ options, questionIdx, autoscroll }) => {

  const [{ questions }, dispatch] = useStateValue()

  const addPoints = () => (
    dispatch({ type: ACTIONS.ADD_POINT })
  )
  
  const submitAnswer = () => {
    dispatch({ type: ACTIONS.ANSWER })
    dispatch({ type: ACTIONS.UPDATE, questions })
  }

  const answerQuestion = chosenOptionIdx => {
    options.forEach((option, idx) => {
      option.answered = true
      if (chosenOptionIdx === idx) {
        option.clicked = true
        option.correct && addPoints()
      }
    })
    questions[questionIdx].options = [...options]
    submitAnswer()
    autoscroll()
  }

  return (
    <div>
      { 
        options.map((option, idx) =>
          <Option 
            key={idx}
            option={option} 
            optionIdx={idx}
            answerQuestion={answerQuestion}
          />
        )
      }
    </div>
  )
}

export default OptionsList