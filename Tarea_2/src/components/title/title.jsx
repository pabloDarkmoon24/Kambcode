import React from 'react'
import './title.css'

const Title = (props) => {
  return (
    <div id='titulo'>
      <p>{props.title}</p>
    </div>
  )
}

export default Title