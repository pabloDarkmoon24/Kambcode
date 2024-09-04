import React from 'react'
import './image.css'

const Image = (props) => {
  return (
    <div>
        <img id="img" src={props.url} alt="Rick Sanchez" />
    </div>
  )
}

export default Image