import React, { Component } from 'react'

import Img from '../assets/quiz-bandeiras.jpg'

class Question extends Component {
  render() {
    return (
      <>
        <div className="containerImg">
          <img className="card-img-top" src={ Img } />
        </div>
        <p className="centeredText">{ this.props.question }</p>
      </>
      
    )
  }
}

export default Question