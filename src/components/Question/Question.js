import React from 'react'
import Img from '../../assets/quiz-bandeiras.jpg'

const Question = ({ question }) => {
    return (
      <>
        <img src={ Img } />
        <p className="question">{ question }</p>
      </>
    )
}

export default Question