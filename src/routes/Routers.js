import React from 'react'

import {Route, Routes, NavLink, Navigate} from "react-router-dom"
import AllFoods from '../pages/AllFoods'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Contact from '../pages/Contact'
import FoodDetails from '../pages/FoodDetails'
import Home from '../pages/Home'

function Routers() {
  return (
    <Routes>
        <Route path='/Food-Delivery-App' element = {<Navigate to= "/home"/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/foods' element = {<AllFoods/>}/>
        <Route path='/food/:id' element = {<FoodDetails/>}/>
        <Route path='/checkout' element = {<Checkout/>}/>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/contact' element = {<Contact/>}/>
    </Routes>
  )
}

export default Routers