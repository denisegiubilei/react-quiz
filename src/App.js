import React from 'react';

import Quiz from './components/Quiz';
import { Header } from './components/Header'
import { StateProvider } from './context/StateProvider'
import { reducer as QuizReducer } from './context/QuizReducer'
import quizData from './data/quiz'

const App = () => {

  const initialState = {
    quiz: [...quizData],
    finished: 0,
    points: 0
  }
  
  return (
    <StateProvider initialState={initialState} reducer={QuizReducer}>
      <Header />
      <Quiz />
    </StateProvider>
  )
}

export default App;
