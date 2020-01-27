import React, { useEffect, useRef } from 'react'
import { useStateValue } from '../../context/StateProvider'
import { QuizCard } from '../QuizCard'
import { Results } from '../Results'

const Quiz = () => {
  const [{ quiz, answered }] = useStateValue()
  const cardsRef = useRef([]);
  
  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, quiz.length);
  }, [quiz]);

  const scrollToNextCard = (clickedCardIdx) => {
    setTimeout(() => {
      const nextCardRef = cardsRef.current[clickedCardIdx + 1]
      nextCardRef && window.scrollTo({ top: nextCardRef.offsetTop, behavior: 'smooth' })
    }, 500);
  }

  return (
    <div>
      { quiz.map((question, index) => (
          <QuizCard 
            key={ index } 
            ref={ instance => cardsRef.current[index] = instance } 
            question={ question } 
            questionIdx={ index }
            autoscroll={ scrollToNextCard }
          />
        )
      )}
      { answered === quiz.length ? <Results total={quiz.length} /> : '' }
    </div>
  )
}

export default Quiz