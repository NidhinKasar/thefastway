import React from 'react';
import Header from '../../components/header';
import { useDispatch } from 'react-redux';
import { cart } from '../../store/cartReducer';


function Cart() {

    const dispatch = useDispatch()
    const clearCart = () => {
        localStorage.setItem('cartItem', 0)
        dispatch(cart({
            payload: 0,
            type: 'market/cart'
        }))
  }

  return (
      <div>
          <Header />   
          <button style={{marginLeft:'50%', marginTop: '10%'}} onClick={clearCart} >Clear Cart</button>
    </div>
  )
}

export default Cart