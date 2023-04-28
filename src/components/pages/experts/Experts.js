import React from 'react'
import './Experts.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import FranciscoEscalona from '../../../assets/FranciscoEscalona.jpg';
import JoséMaríaGonzálezCalabozo from '../../../assets/JoséMaríaGonzálezCalabozo.jpg';
import NestorAlvaro from '../../../assets/NestorAlvaro.jpg';
import RafaelCastillo from '../../../assets/RafaelCastillo.jpg';
import Expert from './Expert';


function Experts() {
  const experts = [
    {
        id: 1,
        imgSrc: FranciscoEscalona,
        name: "Francisco Escalona",
        title: "Head of Artificial Intelligence and Data Science en Orange España.",
        linkedIn: "https://www.linkedin.com/in/francisco-escalona/"
    },
    {
      id: 2,
      imgSrc: JoséMaríaGonzálezCalabozo,
      name: "José María González Calabozo",
      title: "Data Scientist at Securitize",
      linkedIn: "https://www.linkedin.com/in/josemaria/"
    },
    {
      id: 3,
      imgSrc: RafaelCastillo,
      name: "Rafael Castillo",
      title: "Machine Learning Engineer en Affirm",
      linkedIn: "https://www.linkedin.com/in/rafaelcastillo2/"
    },
    {
      id: 3,
      imgSrc: NestorAlvaro,
      name: "Néstor Álvaro",
      title: "Head of Advanced Analytics & Data Science en Santalucia Seguros",
      linkedIn: "https://www.linkedin.com/in/nestoralvaro-phd/"
    }
  ]
  return (
    // <div className='objectives'>
        <div className='experts-container container'>
            <Carousel
             axis="horizontal"
             showThumbs={false}
             infiniteLoop={true}
             showStatus={false}
            >
              {experts.map((expert) => <Expert key={expert.id} imgSrc={expert.imgSrc} name={expert.name} title={expert.title} linkedIn={expert.linkedIn}/>
              )}
            </Carousel>
        </div>
    // </div>
  )
}

export default Experts