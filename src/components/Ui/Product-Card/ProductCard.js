import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles.css/product-card.css"
import { useDispatch } from "react-redux"
import { cartActions } from "../../../Store/ShoppingCart/CartSlice"

function ProductCard(props) {
  
  const {id, title, image01, price} = props.item;
  
  const dispatch = useDispatch();
  
  const addToCart = ()=>{
    dispatch(cartActions.addItem({
      id,
      title,
      image01,
      price
    }))
  }
   
  return (
    <div className='product__item'>
        <div className='product__img' >
            <img src={image01} alt= {title} className = "w-50"/>
        </div>
        
        <div className='product__content'>
            <h5><Link to={`/food/${id}`}>{title}</Link></h5>
            
            <div className='d-flex align-items-center justify-content-between'>
                <span className='product__price'>${price}</span>
                <button className='addToCart__btn' onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard