import React, { Component } from 'react'
import { QuizContext } from './MyProvider'
import Option from './Option'

class OptionsList extends Component {

  handleClick = index => {
    if (!this.props.answered) {
      let { quiz } = this.context.state
      let { options } = this.props
     
      options.forEach((el, idx) => {
        if (index === idx) {
          el.clicked = true
          this.context.addPoint(el)
          quiz[this.props.index].resposta = el.correct ? 'correta' : 'errada'
        }
      })
      quiz[this.props.index].options = [...options]
      quiz[this.props.index].answered = true
      this.context.update(quiz)
    }
  }

  render() {
    return (
      <>
        { 
          this.props.options.map((el, index) =>
            <Option 
              key={index}
              index={index}
              option={el} 
              answered={this.props.answered}
              handleClick={this.handleClick}
            />
          )
        }
      </>
    )
  }
}

OptionsList.contextType = QuizContext;

export default OptionsList