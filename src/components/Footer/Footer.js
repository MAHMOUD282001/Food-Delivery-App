import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import logo from "../../assets/images/res-logo.png"
import "../../components/styles.css/Footer.css"
import {Link} from "react-router-dom"


function Footer() {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg = "3" md = "4" sm = "6">
            <div className='logo footer__logo text-start'>
              <img src= {logo} alt = "logo"/>
              <h5>Tasty Treat</h5>
              <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
            </div>
          </Col>
          
          <Col lg = "3" md = "4" sm = "6">
            <h5 className='footer__title'>Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Friday - Saturday</span>
                <p>off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          
          <Col lg = "3" md = "4" sm = "6">
          <h5 className='footer__title'>Contact</h5>
            <ListGroup className="deliver__time-list">
              
            <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Location: Egypt Cairo</span>
              </ListGroupItem>
            
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Phone: 01142586421</span>
              </ListGroupItem>
              
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Email: example@example.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          
          <Col lg = "3" md = "4" sm = "6">
            <h5 className='footer__title'>Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className = "newsletter">
              <input type= "email" placeholder='Enter Your Email'/>
              <span><i className='ri-send-plane-line'></i></span>
            </div> 
          </Col>
          
          <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2022, website made by Mahmoud Khallaf. All Rights
              Reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                {" "}
                <Link to="https://www.facebook.com/mahmoud.khallaf.5688">
                  <i class="ri-facebook-line"></i>
                </Link>{" "}
              </span>

              <span>
                <Link to="https://github.com/MAHMOUD282001">
                  <i class="ri-github-line"></i>
                </Link>
              </span>
              
              <span>
                {" "}
                <Link to="https://www.linkedin.com/in/mahmoud-khallaf-084b911b9/">
                  <i class="ri-linkedin-line"></i>
                </Link>{" "}
              </span>
            </div>
          </Col>
        </Row>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer