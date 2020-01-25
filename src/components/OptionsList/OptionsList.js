import React from 'react'

import { useStateValue } from '../../context/StateProvider'
import { ACTIONS } from '../../context/QuizReducer'

import { Option } from '../Option'

const OptionsList = (props) => {

  const [{ quiz }, dispatch] = useStateValue()

  const handleClick = index => {
    if (!props.answered) {
      let { options } = props
     
      options.forEach((el, idx) => {
        if (index === idx) {
          el.clicked = true
          dispatch({
            type: ACTIONS.ADD_POINT
          })
          quiz[props.index].resposta = el.correct ? 'correta' : 'errada'
        }
      })
      quiz[props.index].options = [...options]
      quiz[props.index].answered = true
      dispatch({
        type: ACTIONS.UPDATE,
        quiz: [... quiz]
      })}
    }

    return (
      <>
        { 
          props.options.map((el, index) =>
            <Option 
              key={index}
              index={index}
              option={el} 
              answered={props.answered}
              handleClick={handleClick}
            />
          )
        }
      </>
    )
}

export default OptionsList