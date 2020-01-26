import React from 'react'

const Option = ( { option, optionIdx, answerQuestion } ) => {

  const { title, correct, clicked, answered } = option

  const feedbackClass = answered && correct ? 'success' : ( clicked ? 'error' : '' )

  const disabled = answered && !correct

  const _handleClick = (e) => {
    e.preventDefault()
    answerQuestion(optionIdx)
  }

  return (
    <button
      disabled={disabled}
      className={'btn ' + feedbackClass} 
      onClick={_handleClick}   
    > 
      {title}
    </button>
  )
}

export default Option