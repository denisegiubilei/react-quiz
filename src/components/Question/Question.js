import React from 'react'
import fallbackImg from '../../static/assets/fallback.jpg'

const Question = ({ title, img }) => (
  <div className="img-container">
    <img 
      alt={title} 
      src={img} 
      onError={e => { 
          e.target.onerror = null
          e.target.src = fallbackImg
        }
      }
    /> 
    <p className="question">{title}</p>
  </div>
)

export default Question