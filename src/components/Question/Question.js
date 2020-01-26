import React from 'react'
import Img from '../../assets/quiz-bandeiras.jpg'

const Question = ({ title }) => (
  <>
    <img alt="Flags" src={Img} />
    <p className="question">{title}</p>
  </>
)

export default Question