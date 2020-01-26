import React from 'react'
import { useStateValue } from '../../context/StateProvider'
import { QuizCard } from '../QuizCard'

const Quiz = () => {
  const [{ quiz }, _] = useStateValue()

  return (
    <div>
      { quiz.map((question, index) => (
          <QuizCard 
            question={ question } 
            questionIdx={ index }
            key={ index } 
          />
        )
      )}
    </div>
  )
}

export default Quiz