import React from 'react'

const Header = ({title = 'Quiz'}) => (
  <div className="header">
    <p className="title">{title}</p>
  </div>
)

export default Header