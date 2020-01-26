import React from 'react'

const Option = ( props ) => {

    const { answered, index, handleClick } = props
    const { option, correct, clicked } = props.option

    const buttonClass = answered 
      ? correct ? 'list-group-item-success hoverNone' : 'list-group-item-danger hoverNone'
      : ''

    const disabled = !clicked && !correct && answered
  
    return (
      <button
        disabled={ disabled }
        className={'btn ' + buttonClass} 
        onClick={() => handleClick(index)}   
      > { option } </button>      
    )
}

export default Option