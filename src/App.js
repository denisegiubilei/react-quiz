import React from 'react';

import Quiz from './components/Quiz';
import Header from './components/Header'
import { MyProvider } from './components/MyProvider'

class App extends React.Component {

  render () {
    return (
      <MyProvider>
        <Header />
        <Quiz />
      </MyProvider>
    )
  }
}

export default App;
