import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import Helmet from "../components/Helmet"
import CommonSection from "../components/Ui/CommonSection/CommonSection"
import products from "../assets/fake-data/products"
import "../components/styles.css/FoodDetails.css"
import ProductCard from '../components/Ui/Product-Card/ProductCard'
import { useDispatch } from 'react-redux'
import { cartActions } from '../Store/ShoppingCart/CartSlice'
import { useEffect } from 'react'


function FoodDetails() {
  
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [review, setReview] = useState("")
  
  
  let [activeTab, setActiveTab] = useState("desc")
  
  let {id} = useParams()
  
  let product = products.find(product=> product.id === id)
  
  let [previewImage, setPreviewImage] = useState(product.image01)
  
  const relatedProducts = products.filter(item=> item.category === product.category)
  
  const dispatch = useDispatch();
  
  const addToCart = ()=>{
    dispatch(cartActions.addItem({
      id: product.id,
      title: product.title,
      image01: product.image01,
      price: product.price
    }))
  }
  
  let submitHandler = (e)=>{
    e.preventDefault()
  }
  
  useEffect(()=>{
    setPreviewImage(product.image01)
    window.scrollTo(0, 0)
  },[product])
  
  return (
    <Helmet title = "Product Details">
      <CommonSection title = {product.title}/>
      
      <section>
        <Container>
          <Row>
            <Col lg = "2" md = "2" className='product__images'>
              <div className='img__item mb-3' onClick = {()=> setPreviewImage(product.image01)}>
                <img src = {product.image01} className = "w-50" alt = "Product"/>
              </div>
              
              <div className='img__item mb-3' onClick = {()=> setPreviewImage(product.image02)}>
                <img src = {product.image02} className = "w-50" alt = "Product"/>
              </div>
              
              <div className='img__item' onClick = {()=> setPreviewImage(product.image03)}>
                <img src = {product.image03} className = "w-50" alt = "Product"/>
              </div>
            </Col>
            
            <Col lg = "4" md = "4">
              <div className='product__main-img'>
                <img src = {previewImage} className = "w-100" alt = "Product"/>
              </div>
            </Col>
            
            <Col lg = "6" md = "6">
              <div className='product__content'>
                <h2 className='product__title mb-3'>{product.title}</h2>
                <p className='product__price'>{" "}Price: <span>${product.price}</span></p>
                <p className='category mb-5'>Category: <span>{product.category}</span></p>
                <button className='addToCart__btn' onClick={addToCart}>Add To Cart</button>
              </div>
            </Col>
            
            <Col lg = "12">
              <div className='tabs d-flex align-items-center gap-3 py-2'>
                <h6 className={activeTab === "desc" ? 'tab__active' : ""} onClick={()=> setActiveTab("desc")}>Description</h6>
                <h6 className={activeTab === "rev" ? 'tab__active' : ""} onClick={()=> setActiveTab("rev")}>Review</h6>
              </div>
              
              {
                activeTab === "desc" ?
                
                <div className='tab__content mt-5'>
                  <p>{product.desc}</p>
                </div>
                
                :
                
                <div className='tab__form'>
                  <div className='tab__form mb-3 mt-5'>
                    <div className='review'>
                      <p className='user__name mb-0'>John Doe</p>
                      <p className='user__email'>john@gmail.com</p>
                      <p className='feedback__text'>Great Product</p>
                    </div>
                    
                    <div className='review'>
                      <p className='user__name mb-0'>John Doe</p>
                      <p className='user__email'>john@gmail.com</p>
                      <p className='feedback__text'>Great Product</p>
                    </div>
                    
                    <div className='review'>
                      <p className='user__name mb-0'>John Doe</p>
                      <p className='user__email'>john@gmail.com</p>
                      <p className='feedback__text'>Great Product</p>
                    </div>
                  </div>
                  
                  
                  <form className='form' onSubmit={submitHandler}>
                    <div className='form__group'>
                      <input required type="text" placeholder='Enter Your Name' onChange={e => setName(e.target.value)}/>
                    </div>
                    
                    <div className='form__group'>
                      <input required type="text" placeholder='Enter Your Email' onChange={e => setEmail(e.target.value)}/>
                    </div>
                    
                    <div className='form__group'>
                      <textarea required rows={5} type="text" placeholder='Enter Your Review' onChange={e => setReview(e.target.value)}/>
                    </div>
                    
                    <button className='addToCart__btn'>Submit</button>
                  </form>
                </div>
                
              }
            </Col>
            
            <Col lg = "12" className='mb-5 mt-5'>
              <h2 className='related__product-title'>You Might also Like</h2>
            </Col>
            
            {
              relatedProducts.map(product=>(
                <Col xl = "3" lg = "4" md = "6" sm = "12" xs = "12" key={product.id}>
                  <ProductCard item = {product}/>
                </Col>
              ))
            }
            
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default FoodDetails