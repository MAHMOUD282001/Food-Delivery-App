import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from "../components/Helmet"
import CommonSection from "../components/Ui/CommonSection/CommonSection"
import "../components/styles.css/Cart.css"
import { useDispatch, useSelector } from 'react-redux'
import {cartActions} from "../Store/ShoppingCart/CartSlice"
import { Link } from 'react-router-dom'

function Cart() {
  
  const cartItems = useSelector(state=> state.cart.cartItems)
  
  let totalAmount = useSelector(state => state.cart.totalAmount)
  
  const dispatch = useDispatch()
  
  const deleteItem = (id)=>{
    dispatch(cartActions.deleteItem(id))
  }
  
  return (
    <Helmet title="Cart">
      <CommonSection title="Cart"/>
      <section>
        <Container>
          <Row>
            <Col lg = "12">
              
              {
                
                cartItems.length === 0 ? 
                
                <h5 className='text-center'>Your Cart Is Empty</h5> 
                
                :
                
                <table className='table table-bordered'>
                  <thead>
                    <tr>
                      <th className='text-center'>Image</th>
                      <th className='text-center'>Product Title</th>
                      <th className='text-center'>Price</th>
                      <th className='text-center'>Quantity</th>
                      <th className='text-center'>Delete</th>
                    </tr>
                  </thead>
                  
                  <tbody>
                    {
                    cartItems.map(cartItem=>(
                      <tr className=''>
                        <td className='text-center cart__img'><img src={cartItem.image01} alt = "cart item"/></td>
                        <td className='text-center'>{cartItem.title}</td>
                        <td className='text-center'>{cartItem.price}</td>
                        <td className='text-center'>{cartItem.quantity}</td>
                        <td className='text-center del__item'><i className='ri-delete-bin-line' onClick={()=> deleteItem(cartItem.id)}></i></td>
                      </tr>
                    ))
                    }
                  </tbody>
                </table>
              }
              
              <div className='cart__subtotal mt-5'>
                <h6>Subtotal: $<span>{totalAmount}</span></h6>
                <p>Taxes and shipping will calculate at checkout.</p>
                <div>
                  <button className='addToCart__btn me-3 mb-lg-0 mb-3'><Link to = "/foods">Continue Shipping</Link></button>
                  
                  <button className='addToCart__btn'><Link to = "/checkout">Proceed to checkout</Link></button>
                  
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Cart