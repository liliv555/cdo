import React from 'react'
import './Info.css'


function Info() {
  return (
    <div className='container info-wrapper' style={{marginBottom: "4rem"}}>
        <h2 style={{marginBottom: "2rem"}}>¿Qué es la CDO DataAcademy?</h2>
        <p style={{margin : "auto", width: "75%", marginBottom: "2rem"}}>
          CDO dataAcademy nace de la colaboración entre Videocation y el Club CDO Spain & Latam.
          La comunidad del Club CDO está formado por los responsables de datos de las principales organizaciones de España
          y Latinoamérica. Ya somos más de 300 las empresas representadas, y en nuestras reuniones compartimos nuestra
          visión y experiencia del mundo del dato, tanto nuestros éxitos como nuestros fracasos. Esto nos ha enriquecido
          profesionalmente de tal manera que nos propusimos ofrecer una formación de calidad y sobre todo basada en la
          experiencia, a todos aquellos profesionales que buscan adquirir los conocimientos fundamentales y prácticos
          para transformar sus compañías con datos.
        </p>
        <div className="col-12 col-md-7 info-video" style={{margin : "auto"}}>
            <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/h51AMcSxxN4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
            </iframe>
        </div>
    </div>
  )
}

export default Info