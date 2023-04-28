import React from 'react'
import Creator from './Creator';
import ClubCdoLogo from '../../../assets/clubCdoLogo.png'
import VideocationLogo from '../../../assets/videocation_logo.png'
import './Creator.css'

function Creators() {
  const creators = [
    {
      id: 1,
      logoSrc: VideocationLogo,
      header: "Videocation",
      content: "Videocation es una plataforma de formación en vídeo para empresas, con un modelo suscripción mensual en el que los usuarios pueden acceder al contenido de todas las áreas.",
    },
    {
      id: 2,
      logoSrc: ClubCdoLogo,
      header: "Club CDO",
      content: "La comunidad del Club CDO está formado por los responsables de datos de las principales organizaciones de España y Latinoamérica. Ya somos más de 300 las empresas representadas, y en nuestras reuniones compartimos nuestra visión y experiencia del mundo del dato, tanto nuestros éxitos como nuestros fracasos. Esto nos ha enriquecido profesionalmente de tal manera que nos propusimos ofrecer una formación de calidad y sobre todo basada en la experiencia, a todos aquellos profesionales que buscan adquirir los conocimientos fundamentales y prácticos para transformar sus compañías con datos.",
    }
  ]


  return (
    <div className='container creator-container'>
        <h2> ¿Quiénes somos? </h2>
        <div className='row'>
          {creators.map((creator) => {
            return <Creator key={creator.id} logoSrc={creator.logoSrc} header={creator.header} content={creator.content} />;
          })}
        </div>
    </div>
  )
}

export default Creators