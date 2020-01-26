import React from 'react'
import Img from '../../assets/quiz-bandeiras.jpg'

const Question = ({ title }) => {
    return (
      <>
        <img alt="question background" src={ Img } />
        <p className="question">{ title }</p>
      </>
    )
}

export default Question