import React from 'react'
import './characterCard.css'

const CharacterCard = (props) => {
  return (
    <div className='card'>
      <img src={props.image} alt="imagen" />
      <h2>{props.name}</h2>
      <h3>{props.status}</h3>
      <h3>{props.genre}</h3>
    </div>
  )
}

export default CharacterCard