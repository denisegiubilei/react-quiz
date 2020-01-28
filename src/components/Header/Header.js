import React from 'react'
import { useStateValue } from '../../context/StateProvider'

const Header = () => {
  const [{ originalQuiz }] = useStateValue()
  return (
    <header className="header">
      <p>{originalQuiz.title || 'Quiz'}</p>
    </header>
  )
}

export default Header