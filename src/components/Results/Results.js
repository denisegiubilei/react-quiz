import React from 'react'

const Results = ({ context }) => {
    return (
      <div className="callout callout-primary" >
        <div className="row">
          <p className="align-middle col-sm-8 hits">Você acertou {context.state.points} de {context.state.quiz.length} perguntas!</p>
          <button className="btn btn-light col-sm-4" onClick={context.refresh}>
            <i className="fas fa-redo"></i> Refazer Quiz
          </button>
        </div>
      </div>
    )
    
}

export default Results