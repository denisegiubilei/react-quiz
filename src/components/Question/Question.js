import React from 'react'

const Question = ({ title, img }) => (
  <>
    <img alt={title} src={img} />
    <p className="question">{title}</p>
  </>
)

export default Question