import React from 'react'

const Header = ({title = 'Quiz'}) => (
  <header className="header">
    <p>{title}</p>
  </header>
)

export default Header