import React from 'react'
import Img from '../../assets/quiz-bandeiras.jpg'

const Question = ({ question }) => {
    return (
      <>
        <div className="containerImg">
          <img className="card-img-top" src={ Img } />
        </div>
        <p className="centeredText">{ question }</p>
      </>
      
    )
}

export default Question