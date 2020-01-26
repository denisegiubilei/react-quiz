import React from 'react'
import { useStateValue } from '../../context/StateProvider'
import { ACTIONS } from '../../context/QuizReducer'

const Results = () => {
  const [{ points, quiz }, dispatch] = useStateValue()

  const refresh = () => dispatch({
    type: ACTIONS.REFRESH
  })

  return (
    <div className="callout callout-primary" >
      <div className="row">
        <p className="align-middle col-sm-8 hits">Você acertou {points} de {quiz.length} perguntas!</p>
        <button className="btn btn-light col-sm-4" onClick={refresh}>
          <i className="fas fa-redo"></i> Refazer Quiz
        </button>
      </div>
    </div>
  )
    
}

export default Results