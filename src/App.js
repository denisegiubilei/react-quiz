import React from 'react';

import { Quiz } from './components/Quiz';
import { Header } from './components/Header'
import { StateProvider } from './context/StateProvider'
import { reducer as QuizReducer } from './context/QuizReducer'
import quizData from './data/quiz'

const App = () => {

  const initialState = {
    quiz: [...quizData.questions],
    answered: 0,
    points: 0
  }
  
  return (
    <StateProvider initialState={initialState} reducer={QuizReducer}>
      <Header title={quizData.title}/>
      <Quiz />
    </StateProvider>
  )
}

export default App;
