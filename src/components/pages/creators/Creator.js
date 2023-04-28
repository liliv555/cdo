import React from 'react'
import './Creator.css'


function Creator(props) {
  return (
      <div className='col-sm creator-card'>
        <div className='creator-header'>
            <img src={props.logoSrc} alt="creator" className='creator-logo'></img>
            <h2> {props.header} </h2>
        </div>
        <p> {props.content} </p>
      </div>
  )
}

export default Creator
