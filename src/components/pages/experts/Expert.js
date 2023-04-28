import React from 'react'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Expert(props) {
  return (
    <div className='experts-carousel'>
      <img src={props.imgSrc} alt={props.name} className='expert-icon'></img>
      <div className='expert-info'>
        <h4>{props.name} <a href={props.linkedIn}><FontAwesomeIcon icon={faLinkedin} className='expert-linkedin'/></a> </h4>
        <p>{props.title}</p>
      </div>
    </div>
  )
}

export default Expert
