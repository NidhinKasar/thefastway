import React, { useState, useEffect } from 'react';
import {Row , Col} from 'react-bootstrap'
import ProductCards from './productsCards';

export default function Products({data}) {

    let testArray = data && data.length > 0 && data.map((item) => { return item.category })

    const uniqueArray = testArray && testArray.length > 0 && testArray.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });

    const [cartData, setCartData] = useState([])

    const selectData = (type) => {
         return data && data.length > 0 && data.filter((item) => item.category === type)
    }

    const addToCart = (item) => {
        if (item) {
            cartData.push(item)
        }
        setCartData([...cartData])
    }

    const buyNow = (item) => {
        console.log("Bought", item);
    }

    useEffect(() => {
    console.log("cartDtaa", cartData);
    }, [cartData])
    

    return (
        <>
            {uniqueArray && uniqueArray.length > 0 && uniqueArray.map((item) => {
                return(
                 <Row>
                <h5>{item}</h5>
                 {selectData(item) && selectData(item).length > 0 && selectData(item).map((value, key)=>(
                     <Col sm={12} md={8} lg={6} xl={3}>
                         {/* <p>{item.name}</p> */}
                         <ProductCards item={value} onClick={addToCart} key={key} buyNow={buyNow} />
                     </Col>
                 ))}
                    </Row>   
                )
            })}
        </>
    )
}