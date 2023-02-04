import React from 'react'
import { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/Helmet'
import CommonSection from '../components/Ui/CommonSection/CommonSection'

function Contact() {
  
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [subject, setSubject] = useState("")
  let [description, setDescription] = useState("")
  
  let submitHandler = (e)=>{
    e.preventDefault()
  }
  
  return (
    <Helmet title="Contact Us">
      <CommonSection title="Contact Us"/>
      
      <section>
        <Container>
          <Row>
            <Col lg = "12">
              <h4 className='mb-5 text-center'>Contact Us</h4>
              
              <form className='checkout__form' onSubmit={submitHandler}>
                <div className='form__group'>
                  <input type="text" placeholder='Enter Your Name' required onChange={e=> setName(e.target.value)}/>
                </div>
                
                <div className='form__group'>
                  <input type="email" placeholder='Enter Your Email' required onChange={e=> setEmail(e.target.value)}/>
                </div>
                
                <div className='form__group'>
                  <input type="text" placeholder='Enter Your Subject' required onChange={e=> setSubject(e.target.value)}/>
                </div>
                
                <div className='form__group'>
                  <input type="text" placeholder='Enter Your Description' required onChange={e=> setDescription(e.target.value)}/>
                </div>
                
                <button type='submit' className='addToCart__btn'>Submit</button>
                
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Contact