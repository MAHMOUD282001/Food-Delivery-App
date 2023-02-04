import React from 'react'
import { useSelector } from 'react-redux'
import Routers from '../../routes/Routers'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import InsideCart from '../Ui/Cart/InsideCart'


function Layout() {
  const showCart = useSelector((state)=> state.cartUi.cartIsVisible)
  return (
    <div>
        <Header/>
        
        { showCart && <InsideCart/>}
        
        <div>
            <Routers/>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout