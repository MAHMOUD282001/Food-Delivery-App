import React, { useState, useEffect } from 'react'
import { Container, Col, Row, ListGroup, ListGroupItem } from 'reactstrap'
import Helmet from '../components/Helmet'
import heroImg from "../assets/images/hero.png"
import "../components/styles.css/hero-section.css"
import { Link } from 'react-router-dom'
import Category from '../components/Ui/Category/Category'
import "../components/styles.css/Home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";



import products from "../assets/fake-data/products"

import foodCategoryImg01 from "../assets/images/hamburger.png"
import foodCategoryImg02 from "../assets/images/pizza.png"
import foodCategoryImg03 from "../assets/images/bread.png"
import ProductCard from '../components/Ui/Product-Card/ProductCard'

import whyImg from "../assets/images/location.png"

import networkImg from "../assets/images/network.png"
import TestimonialSlider from '../components/Ui/Slider/TestimonialSlider'




const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
];

function Home() {
  
  const [category, setCategory] = useState("ALL");
  
  const [allProducts, setAllProducts] = useState(products);
  
  const [hotPizza, serHotPizza] = useState([]);
  
  useEffect(()=>{
    let filteredPizza = products.filter(item => item.category === "Pizza")
    
    let slicedPizza = filteredPizza.slice(0, 4)
    
    serHotPizza(slicedPizza)
    
  }, [])
  
  
  useEffect(() => {
    
    if(category === "ALL"){
      setAllProducts(products)
    }
    
    else if(category === "BURGER"){
      const filteredProducts = products.filter(item => item.category === "Burger");
      
      setAllProducts(filteredProducts)
    }
    
    else if(category === "PIZZA"){
      const filteredProducts = products.filter(item => item.category === "Pizza");
      
      setAllProducts(filteredProducts)
    }
    
    else if(category === "BREAD"){
      const filteredProducts = products.filter(item => item.category === "Bread");
      
      setAllProducts(filteredProducts)
    }
    
  }, [category])
  

  
  return (
    <Helmet title= "Home">
      <section>
        <Container>
          <Row>
            <Col lg = "6" md = "6">
              <div className='hero__content'>
                <h5 className='mb-3'>Easy way to make an order</h5>
                <h1 className='mb-4 hero__title'><span>HUNGRY?</span> Just wait food at<span> your door</span></h1>
                <p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
                
                
                <div className='hero__btns d-flex align-items-center gap-5 mt-4'>
                  <button className='order__btn d-flex align-items-center justify-content-between'>Order now <i className='ri-arrow-right-s-line'></i></button>
                  
                  <button className='all__foods-btn'><Link to= "/foods">See all foods</Link></button>
                </div>
                
                
                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
            
            <Col lg = "6" md = "6">
              <div className='hero__img'>
                <img src= {heroImg} alt = "heroImg" className='w-100'/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section>
        <Category/>
      </section>
      
      <section>
        <Container>
          <Row>
            <Col lg = "12" className='text-center'>
              <h5 className='feature__subtitle mb-4'>What we serve</h5>
              <h2 className='feature__title'>just set back at home</h2>
              <h2 className='feature__title'>
                we will <span>take care</span>
              </h2>
              
              <p className="mb-1 mt-4 feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                officiis?
              </p>
              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, eius.{" "}
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
      <section>
        <Container>
          <Row>
            <Col lg = "12" className='text-center'>
              <h2>Popular Food</h2>
            </Col>
            
            <Col lg = "12">
              <div className='food__category d-flex align-items-center justify-content-center flex-wrap gap-5'>
                <button className={`all__btn ${category === 'ALL' ? 'foodBtnActive' : ''}`} onClick={()=> setCategory("ALL")}>All</button>
                <button className={`d-flex align-items-center justify-content-center gap-2 ${category === 'BURGER' ? 'foodBtnActive' : ''}`} onClick={()=> setCategory("BURGER")}><img src= {foodCategoryImg01} alt = "Burger"/>Burger</button>
                <button className={`d-flex align-items-center justify-content-center gap-2 ${category === 'PIZZA' ? 'foodBtnActive' : ''}`} onClick={()=> setCategory("PIZZA")}><img src= {foodCategoryImg02} alt = "Pizza"/>Pizza</button>
                <button className={`d-flex align-items-center justify-content-center gap-2 ${category === 'BREAD' ? 'foodBtnActive' : ''}`} onClick={()=> setCategory("BREAD")}><img src= {foodCategoryImg03} alt = "Bread"/>Bread</button>
              </div>
            </Col>
            
            
            {
              allProducts.map(item =>(
                <Col xl = "3" lg = "4" md = "6" sm = "12" xs = "12" key={item.id} className = "mt-5">
                  <ProductCard item = {item} />
                </Col>
              ))
            }
            
          </Row>
        </Container>
      </section>
      
      <section>
        <Container>
          <Row>
            <Col lg = "6" md = "6">
              <img src= {whyImg} alt = "Why" className='w-100'/>
            </Col>
            
            <Col lg = "6" md = "6">
              <div className = "why__tasty-treat ">
                <h2 className='tasty__treat-title mb-4'>Why <span>Tasty Treat?</span></h2>
                <p className='tasty__treat-desc'>lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor </p>
                
                <ListGroup className='mt-5'>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className=' choose__us-title d-flex align-items-center gap-2'><i className='ri-checkbox-circle-line'></i> Fresh and Tasty Foods</p>
                    <p className='choose__us-desc'>lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor</p>
                  </ListGroupItem>
                
                  <ListGroupItem className='border-0 ps-0'>
                    <p className=' choose__us-title d-flex align-items-center gap-2'><i className='ri-checkbox-circle-line'></i> Quality Support</p>
                    <p className='choose__us-desc'>lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor</p>
                  </ListGroupItem>
                  
                  <ListGroupItem className='border-0 ps-0'>
                    <p className=' choose__us-title d-flex align-items-center gap-2'><i className='ri-checkbox-circle-line'></i> Order from any Location</p>
                    <p className='choose__us-desc'>lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor</p>
                  </ListGroupItem>
                  
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      
      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg="12" className='text-center mb-5'>
              <h1>Hot Pizza</h1>
            </Col>
            
            {
            hotPizza.map(item =>(
            <Col xl = "3" lg = "4" md = "6" sm = "12" xs = "12" key={item.id}>
              <ProductCard item = {item}/>
            </Col>
            ))}
          </Row>
        </Container>
      </section>
      
      
      <section>
        <Container>
          <Row>
            <Col lg= "6" md = "6">
              <div className='testimonial overflow-hidden'>
                <h5 className='testimonial__subtitle mb-4'>Testimonial</h5>
                <h2 className='testimonial__title mb-4'>What our <span>Customers</span> are Saying</h2>
                
                <p className='testimonial-desc'>lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor</p>
                
                <TestimonialSlider/>
              </div>
            </Col>
            
            <Col lg= "6" md = "6">
              <img src= {networkImg} alt = "testimonial-img" className='w-100'/>
            </Col>
          </Row>
        </Container>
      </section>
      
    </Helmet>
  )
}

export default Home