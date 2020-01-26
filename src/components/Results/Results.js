import React, { useEffect, useRef } from 'react'
import { useStateValue } from '../../context/StateProvider'
import { ACTIONS } from '../../context/QuizReducer'

const Results = ({ total }) => {
  const resultsRef = useRef(null)
  const [{ points }, dispatch] = useStateValue()

  useEffect(() => {
    scrollToReference(resultsRef)
  });
  
  const refresh = () => {
    scrollToTop()
    dispatch({
      type: ACTIONS.REFRESH
    })
  }

  const scrollToTop = () => (
    window.scrollTo({ top:0, left:0, behavior: 'smooth' })
  )

  const scrollToReference = ref => (
    window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' })
  ) 

  return (
    <div className="callout" ref={resultsRef}>
      <div className="results">
        <p>Você acertou {points} de {total} perguntas!</p>
        <button className="btn retry" onClick={refresh}>
          Refazer Quiz
        </button>
      </div>
    </div>
  )
    
}

export default Results