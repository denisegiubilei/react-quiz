import React from 'react'
import { useStateValue } from '../../context/StateProvider'
import { QuizCard } from '../QuizCard'

const Quiz = () => {
  const [{ quiz }, _] = useStateValue()

  return (
    <>
      { quiz.map((el, index) =>
        <QuizCard quiz={ el } key={ index } index={index} />
      )}
      {/* { finished === quiz.length ? <Results /> : '' } */}
    </>
  )
}

export default Quiz