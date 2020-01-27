import React from 'react'
import { useStateValue } from '../../context/StateProvider'
import { ACTIONS } from '../../context/QuizReducer'
import { Option } from '../Option'

const OptionsList = ({ options, questionIdx }) => {

  const [{ quiz }, dispatch] = useStateValue()

  const addPoints = () => (
    dispatch({ type: ACTIONS.ADD_POINT })
  )
  
  const submitAnswer = () => {
    dispatch({ type: ACTIONS.ANSWER })
    dispatch({ type: ACTIONS.UPDATE, quiz })
  }

  const answerQuestion = chosenOptionIdx => {
    options.forEach((option, idx) => {
      option.answered = true
      if (chosenOptionIdx === idx) {
        option.clicked = true
        option.correct && addPoints()
      }
    })
    quiz[questionIdx].options = [...options]
    submitAnswer()
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