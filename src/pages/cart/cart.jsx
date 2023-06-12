import React from 'react'
import { Button } from 'react-bootstrap'
import Header from '../../components/header'
import { useDispatch } from 'react-redux'

function Cart() {

    const dispatch = useDispatch()
    const clearCart = () => {
        localStorage.setItem('cartItem', 0)
        // dispatch({
        //     type: 'cart',
        //     payload: 0
        // })
  }

  return (
      <div>
          <Header />   
          <Button style={{marginLeft:'50%', marginTop: '10%'}} onClick={clearCart} >Clear Cart</Button>
    </div>
  )
}

export default Cart