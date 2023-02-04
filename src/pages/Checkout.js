import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from "../components/Helmet"
import CommonSection from "../components/Ui/CommonSection/CommonSection"
import "../components/styles.css/Cart.css"
import { useDispatch, useSelector } from 'react-redux'
import {cartActions} from "../Store/ShoppingCart/CartSlice"
import { Link } from 'react-router-dom'
import "../components/styles.css/Checkout.css"
import { useState } from 'react'

function Checkout() {
  
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [phone, setPhone] = useState("")
  let [country, setCountry] = useState("")
  let [city, setCity] = useState("")
  let [postalCode, setPostalCode] = useState("")
  
  
  let cartTotalAmount = useSelector(state => state.cart.totalAmount)
  
  let shippingCost = 30
  
  let totalAmount = cartTotalAmount + Number(shippingCost)
  
  let submitHandler = (e)=>{
    e.preventDefault()
  }
  
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout"/>
      
      <section>
        <Container>
          <Row>
            <Col lg = "8" md = "6">
              <h6 className='mb-4'>Shipping Address</h6>
              
              <form className='checkout__form' onSubmit={submitHandler}>
                <div className='form__group'>
                  <input type="text" placeholder='Enter Your Name' required onChange={e=> setName(e.target.value)}/>
                </div>
                
                <div className='form__group'>
                  <input type="email" placeholder='Enter Your Email' required onChange={e=> setEmail(e.target.value)}/>
                </div>
                
                <div className='form__group'>
                  <input type="number" placeholder='Enter Your Phone Number' required onChange={e=> setPhone(e.target.value)}/>
                </div>
                
                <div className='form__group'>
                  <input type="text" placeholder='Enter Your Country' required onChange={e=> setCountry(e.target.value)}/>
                </div>
                
                <div className='form__group'>
                  <input type="text" placeholder='Enter Your City' required onChange={e=> setCity(e.target.value)}/>
                </div>
                
                <div className='form__group'>
                  <input type="number" placeholder='Enter Your Postal Code' required onChange={e=> setPostalCode(e.target.value)}/>
                </div>
                
                <button type='submit' className='addToCart__btn'>Confirm</button>
                
              </form>
            </Col>
            
            
            <Col lg = "4" md = "6">
              <div className='checkout__bill'>
                <h6 className='d-flex align-items-center justify-content-between mb-3'>Subtotal: <span>${cartTotalAmount}</span></h6>
                
                <h6 className='d-flex align-items-center justify-content-between mb-3'>Shipping: <span>${shippingCost}</span></h6>
                
                <div className='checkout__total'>
                  <h5 className='d-flex align-items-center justify-content-between'>Total: <span>${totalAmount}</span></h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout