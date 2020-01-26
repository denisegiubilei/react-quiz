import React from 'react'

const Question = ({ title, img }) => (
  <div>
    <img alt={title} src={img} />
    <p className="question">{title}</p>
  </div>
)

export default Question