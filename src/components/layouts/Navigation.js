import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import DataAcademyLogo from '../../assets/dataAcademyLogo.png'
import './Navigation.css'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useContext } from 'react'
import { Context } from '../../context'



function Navigation() {
  const { state, dispatch } = useContext(Context)

  function getItemInCart(title, price, currency) {
    return (
      <div className='cart-item'>
        <p>{title}</p>
        <div className='item-action'>
          <p>{(Math.round(price * 100) / 100).toFixed(2)} {currency}</p>
          <a className="hover-underline-animation button remove-btn" onClick={() => {
            sessionStorage.clear()
            dispatch({ type: 'REMOVE_FROM_CART' })
          }}> <FontAwesomeIcon icon={faX}/> Quitar </a>
        </div>
      </div>
    )
  }

  function renderCart() {
    if (sessionStorage.length !== 0) {
      const cart = JSON.parse(sessionStorage.getItem("cart"))
      return getItemInCart(cart.title, cart.price, cart.currency)
    } else if (Object.keys(state.cart).length === 0) {
      return (
        <p>
          El carrito está vacío.
        </p>
      )
    } 
    else {
      return getItemInCart(state.cart.item.title, state.cart.item.price, state.cart.item.currency)
    }
  }

  function getPaymentUrl() {
    if (sessionStorage.length !== 0) {
      const cart = JSON.parse(sessionStorage.getItem("cart"))
      return `${cart.paymentUrl}`
    } else if (Object.keys(state.cart).length === 0) {
      return ("#")
    } 
    else {
      return `${state.cart.item.paymentUrl}`
    }
  }

  return ( 
    <Navbar sticky="top" className='navbar' >
        <Container>
          <div>
            <img
                src={DataAcademyLogo}
                height="250"
                className="logo d-inline-block align-center"
                alt="Club CDO logo"
              />
          </div>
        </Container>
        <NavDropdown title={<h3><FontAwesomeIcon icon={faCartShopping} className='cart'/></h3>}>
          <NavDropdown.Item>
            <h4>Items in cart</h4>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
            {renderCart()}
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href={getPaymentUrl()} target="_blank">
            <a className="hover-underline-animation button">Checkout</a>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item class="dropdown-info">
              <h4>Información importante: </h4>
              <p>Información importante: 
                Obtendrás acceso a la Data Academy de Club CDO recibiendo una invitación al registro entre 24
                horas de completar el pago. Si no recibes en tu bandeja de entrada la invitación al registro,
                controla tu carpeta de SPAM, Sociales o Promociones. Al aceptar la invitación tendrás que confirmar
                tu nombre, correo y contraseña, entonces recibirás un código de verificación para activar
                definitivamente tu perfil y poder empezar con la visualización del módulo.
              </p>
          </NavDropdown.Item>
        </NavDropdown>
      </Navbar>
  )
}

export default Navigation