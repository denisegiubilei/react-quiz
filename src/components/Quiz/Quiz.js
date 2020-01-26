import React from 'react'
import { useStateValue } from '../../context/StateProvider'
import { QuizCard } from '../QuizCard'
import { Results } from '../Results'

const Quiz = () => {
  const [{ quiz, answered }] = useStateValue()

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
      { answered === quiz.length ? <Results total={quiz.length} /> : '' }
    </div>
  )
}

export default Quiz