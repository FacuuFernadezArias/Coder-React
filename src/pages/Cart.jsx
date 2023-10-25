import React from 'react'
import CartDetail from '../components/Cart/CartDetail'
import Advertisings from "../components/items/Advertisings"
import HomeTitle from "../components/items/HomeTitle";

const Cart = () =>{
    return(
        <div className='CartScreen'>
            <Advertisings/>
            <h4 style={{marginBottom:"40px"}} className='centrar'>- TU CARRITO -</h4>
            <CartDetail/>
        </div>
    )

}

export default Cart