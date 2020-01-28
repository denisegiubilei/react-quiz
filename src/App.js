import React from 'react';

import { Quiz } from './components/Quiz';
import { Header } from './components/Header'
import { StateProvider } from './context/StateProvider'
import { reducer as QuizReducer, initialState as QuizInitialState } from './context/QuizReducer'

const App = () => {

  return (
    <StateProvider initialState={QuizInitialState} reducer={QuizReducer}>
      <Header />
      <Quiz />
    </StateProvider>
  )
}

export default App;
