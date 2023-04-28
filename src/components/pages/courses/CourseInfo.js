import React from 'react';
import { useContext } from 'react';
import { Context } from '../../../context'
import Experts from '../experts/Experts';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CourseInfo(props) {
  const { dispatch } = useContext(Context);

  return (
    <div id={props.id}>
      <header className="header">
        <section className='course-header'>
          <h4> {props.title} </h4>
        </section>
      </header>
      <div>
        <h4 style={{ textAlign : "center"}}>{(Math.round(props.price * 100) / 100).toFixed(2)} {props.currency}</h4>
        <div className='add-btn'>
          <a className="hover-underline-animation button" onClick={() => {
                sessionStorage.setItem("cart", JSON.stringify({title: props.title, price: props.price, currency: props.currency, paymentUrl: props.paymentUrl}))
                dispatch({ type: 'ADD_TO_CART', payload: props })
                alert("Added")
              }}> <FontAwesomeIcon icon={faPlus} className='expert-linkedin'/> añadir al carrito </a>
        </div>
        <p style={{ marginTop : "1rem"}}>{props.description}</p>
        <ul>
          {props.content.map((point, index) => {
                  return <li className='module'><h6>{"0" + (index + 1) + ". "}</h6><p>{point}</p></li>;
                })}
        </ul>
        <h4 style={{ fontSize: "1.2rem"}}>Información importante: </h4>
              <p>Información importante: 
                Obtendrás acceso a la Data Academy de Club CDO recibiendo una invitación al registro entre 24
                horas de completar el pago. Si no recibes en tu bandeja de entrada la invitación al registro,
                controla tu carpeta de SPAM, Sociales o Promociones. Al aceptar la invitación tendrás que confirmar
                tu nombre, correo y contraseña, entonces recibirás un código de verificación para activar
                definitivamente tu perfil y poder empezar con la visualización del módulo.
              </p>
      </div>
      <Experts/>
    </div>
  );
}