import React, { useEffect, useState } from 'react'
import './Courses.css'
import productsJson from '../../../products.json'
import Course from './Course';
import CourseInfo from './CourseInfo';
import  iconOne from '../../../assets/iconOne.png';
import  iconTwo from '../../../assets/iconTwo.png';
import  iconThree from '../../../assets/iconThree.png';
import  iconFour from '../../../assets/iconFour.png';

function Courses() {
  const products = JSON.parse(JSON.stringify(productsJson))
  const [chosenProduct, setChosenProduct] = useState(null)
  const icons = [
    { imgSrc: iconOne, text: "Estrategia de Datos" },
    { imgSrc: iconTwo, text: "Gestión y Gobierno del Dato" },
    { imgSrc: iconThree, text: "Consumo de información" },
    { imgSrc: iconFour, text: "Analítica Avanzada" },
  ]

  function onCourseClicked(product) {
    setChosenProduct(product)
  }

  useEffect(() => {
    if (chosenProduct !== null) {
      const offset = 105; 
      const element = document.getElementById(chosenProduct.id);
      if (element) {
        window.scroll({ top: (element.offsetTop - offset), left: 0, behavior: 'smooth' });

      }
    }
  }, [chosenProduct]);

  function renderIcon(imgSrc, text, i) {
    return (
      <div className='col dominios' key={i}>
        <img
          src={imgSrc}
          alt="icon"
          className="course-icon"
        />
        <p>{text}</p>
      </div>
    )
  }

  return (
      <div className='container courses-container' id='courses' style={{marginBottom: "4rem"}}>
          <h2>¿Qué contenidos vas a encontrar?</h2>
          <p style={{ marginTop : "2rem", textAlign : "center"}}>Los cuatro módulos del itinerario formativo se corresponden con cada uno de los cuatro grandes dominios del dataToolkit. Son los siguientes:</p>
          <div className='container dominios-container'>
            <div className='row'>
              {icons.map((icon, i) => {
                return renderIcon(icon.imgSrc, icon.text, i);
              })}
            </div>
          </div>
          <div className='row' style={{marginTop: "2rem", justifyContent: "center"}}>
            {products.map( product => 
              <Course key={product.id} title={product.title} image={product.image} onClick={() => onCourseClicked(product)} />
            )}
          </div>
        { chosenProduct && <CourseInfo key={chosenProduct.title} paymentUrl={chosenProduct.paymentUrl} currency={chosenProduct.currency} price={chosenProduct.price} description={chosenProduct.description} creator={chosenProduct.creator} id={chosenProduct.id} title={chosenProduct.title} image={chosenProduct.image} content={chosenProduct.content}/>}
      </div>
  )
}

export default Courses