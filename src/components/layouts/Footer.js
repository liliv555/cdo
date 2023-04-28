import React from 'react'
import DataAcademyLogo from '../../assets/dataAcademyLogocut.png'
import './Footer.css'
import { faLinkedin, faYoutubeSquare, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-element'>
            <p><FontAwesomeIcon icon={faEnvelope} />cdodataacademy@videocation.no</p>
            <p>|</p>
                    <p><a href=""><FontAwesomeIcon icon={faLinkedin}/></a> </p>
                    <p><a href=""><FontAwesomeIcon icon={faYoutubeSquare}/></a> </p>
                    <p><a href=""><FontAwesomeIcon icon={faTelegram}/></a> </p>
        </div>
        <div className='footer-element'>
            <p><a href="https://clubcdo.com/aviso-legal/" className='footer-link'>Aviso Legal</a> </p>
            <p>|</p>
                <p><a href="https://clubcdo.com/politica-de-privacidad/">Política de Privacidad</a> </p>
        </div>
    </div>
  )
}

export default Footer