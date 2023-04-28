import React from 'react'
import image from '../../../assets/landingImg.png';
import './Landing.css'

import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Landing() {
  // function onClick() {
  //   console.log("here")
  //   const offset = 105; 
  //     const element = document.getElementById('courses');
  //     console.log("here2 ", element)

  //     if (element) {
  //       window.scroll({ top: (element.offsetTop - offset), left: 0, behavior: 'smooth' });

  //     }
  // }
  return (
    <div className="container landing-container" style={{marginBottom: "4rem"}}>
      <div className='row landing'>
      <h2>Te damos la bienvenida a la Data Academy de Club CDO</h2>

        <img
              src={image}
              alt="Landing"
              className="landing-img col-lg"
        />
        <div className="landing-content col-lg">
          <div className="content">
            <p>Los profesionales del Club CDO Spain & Latam hemos preparado un itinerario de formación dividido en cuatro módulos, que se corresponden con los cuatro grandes dominios del mundo del dato: Gestión y Gobierno del Dato, Consumo de la Información, Analítica Avanzada y Estrategia de Datos.
 
              Cada uno de estos módulos consta de cinco cursos de una hora de duración, así como de una sesión en directo por streaming con el coordinador de cada módulo
  
              Impartido por profesionales con años de experiencia en empresa multinacional y con máxima responsabilidad como CDO y Responsables de Datos accederás a las claves y lecciones aprendidas de cada dominio del mundo del dato.
            </p>
            <a href="#courses" className="hover-underline-animation button">Más información <FontAwesomeIcon icon={faArrowRightLong} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing