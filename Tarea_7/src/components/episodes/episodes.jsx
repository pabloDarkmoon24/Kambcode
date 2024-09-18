import React from 'react'
import './episodes.css'

const Episodes = (props) => {
  return (
    <div className='card'>
      <h2>{props.name}</h2>
      <h3>{props.episode}</h3>
      <h3>Date: {props.date}</h3>
    </div>
  )
}

export default Episodes