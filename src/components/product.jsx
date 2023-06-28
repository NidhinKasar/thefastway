import React, { useState, useEffect } from 'react';
import {Row , Col} from 'react-bootstrap'
import ProductCards from './productsCards';
import { useDispatch } from 'react-redux';
import { cart } from '../store/cartReducer';
import './ProductCards.css';

export default function Products({data}) {

    let testArray = data && data.length > 0 && data.map((item) => { return item.category })

 const uniqueArray = testArray && testArray.length > 0 && testArray.filter((value, index, self) => {
        return self.indexOf(value) === index;
 });
    
    const dispatch = useDispatch()
    
//  let modalTestArray = data && data.length > 0 && data.map((item) => { return item.brand })

//  const uniqueModalArray = modalTestArray && modalTestArray.length > 0 && modalTestArray.filter((value, index, self) => {
//     return self.indexOf(value) === index;
// });
    
    // localStorage.setItem('categories', JSON.stringify(uniqueArray))
    // localStorage.setItem('model', JSON.stringify(uniqueModalArray))
    
    const [cartData, setCartData] = useState([])

    const selectData = (type) => {
         return data && data.length > 0 && data.filter((item) => item.category === type)
    }

    const addToCart = (item) => {
        if (item) {
            cartData.push(item)
        }
        setCartData([...cartData])
       // let length = cartData.length;
        localStorage.setItem('cartItem', cartData.length)
        dispatch(cart({
            payload: cartData.length,
            type: 'market/cart'
        }))
    }

    const buyNow = (item) => {
        console.log("Bought", item);
    }

    return (
        <>

                {uniqueArray && uniqueArray.length > 0 && uniqueArray.map((item) => {
                    
                    return (
                        <div className='product-cards'>
                            <h4 className='categoryTitle'>{item && item.toUpperCase()}</h4>
                        { selectData(item) && selectData(item).length > 0 && selectData(item).map((value, key) =>
                        (
                            <ProductCards item={value} onClick={addToCart} key={key} buyNow={buyNow} />
                        )
                        )}
                         </div>
                        )   
                    })
                    }
                    
        </>
    )
    
}

