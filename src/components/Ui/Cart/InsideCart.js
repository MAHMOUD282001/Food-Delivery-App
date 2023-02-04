import React from 'react'
import { ListGroup } from 'reactstrap'
import CartItem from './CartItem'
import {Link} from "react-router-dom"
import "../../styles.css/Shooping-cart.css"
import { useDispatch, useSelector } from 'react-redux'
import { cartUiActions } from '../../../Store/ShoppingCart/CartUiSlice'



function InsideCart() {
  
  
  const dispatch = useDispatch();
  
  const cartProducts = useSelector(state => state.cart.cartItems)
  
  const totalAmount = useSelector(state => state.cart.totalAmount)
    
  
  const toggleCart = () =>{
    dispatch(cartUiActions.toggle())
  }

  return (
    <div className='cart__container'>
        <ListGroup className='cart'>
            <div className='cart__close' onClick={toggleCart}>
                <span><i className='ri-close-fill'></i></span>
            </div>
            
            <div className='cart__item-list'>
                
                {
                  cartProducts.length === 0 ? 
                  <h6 className='text-center mt-5'>No Item Added To Cart</h6> :
                  cartProducts.map((item, index) =>(
                    <CartItem item = {item} index = {index}/>
                  ))
                }
                
            </div>
            
            <div className='cart__bottom'>
                <h6>Subtotal amount: <span>${totalAmount}</span></h6>
                <button><Link to = "/checkout">Checkout</Link></button>
            </div>
        </ListGroup>
    </div>
  )
}

export default InsideCart