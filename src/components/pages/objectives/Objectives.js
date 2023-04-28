import React from 'react'
import './Objectives.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import paraque from '../../../assets/1paraque.png';
import paraquien from '../../../assets/2paraquien.png'; 
import quien from '../../../assets/3quien.png'; 
import como from '../../../assets/4como.png'; 

function Objectives() {
  return (
    <div className='objectives' style={{marginBottom: "4rem"}}>
        <div className='carousel-container container'>
            <Carousel
            axis="horizontal"
            showThumbs={false}
            infiniteLoop={true}
            showStatus={false}
            >
                <div className='carousel-card row'>
                    <img src={paraque} alt="obj" className='obj-img col-md'></img>
                    <div className='col-md'>
                        <h2 className='carousel-title'>¿Para qué?</h2>
                        <p>El objetivo es adquirir los conocimientos prácticos necesarios para poder implantar
                           una estrategia de datos en tu compañía y comprender todos los factores que deben
                           tenerse en cuenta para tener éxito.
                        </p>
                    </div>
                </div>
                <div className='carousel-card row'>
                    <img src={paraquien} alt="obj" className='obj-img col-md'></img>
                    <div className='col-md'>
                        <h2 className='carousel-title'>¿Para quién?</h2>
                        <p>Esta propuesta formativa está dirigida a: 
                            - responsables de datos en sus organizaciones
                            - responsables de unidades de negocio que necesiten utilizar analítica de datos para lograr sus objetivos
                            - miembros de órganos de dirección que busquen crear una estrategia de datos que apoye su estrategia de negocio
                            - usuarios de datos que persigan tener una visión global, práctica y estratégica del mundo del dato y la analítica
                        </p>
                    </div>
                </div>
                <div className='carousel-card row'>
                    <img src={quien} alt="obj" className='obj-img col-md'></img>
                    <div className='col-md'>
                        <h2 className='carousel-title'>¿Quién?</h2>
                        <p>Impartido por profesionales del dato en sus respectivos campos, con años de experiencia en la
                           materia, para aportarte la visión práctica que necesitas, siempre con la garantía del Club CDO
                           Spain & Latam.
                        </p>
                    </div>
                </div>
                <div className='carousel-card row'>
                    <img src={como} alt="obj" className='obj-img col-md'></img>
                    <div className='col-md'>
                        <h2 className='carousel-title'>¿Cómo?</h2>
                        <p>A través de un itinerario, dividido en cuatro módulos, que combinan la formación online junto a sesiones en streaming impartidas por el con el coordinador de cada módulo.
                            La metodología a seguir es la metodología de Videocation: 
                            Cada módulo está compuesto por 5 cursos. 
                            Cada curso tiene una duración de entre 60 y 90 minutos divididos en lecciones de 4 y 6 min. 
                            Al finalizar cada uno de los cursos del módulo tendrás que superar un test de conocimiento multirespuesta con el que afianzarás lo aprendido. 
                        </p>
                    </div>
                </div>
            </Carousel>
        </div>
    </div>
  )
}

export default Objectives