import React from 'react'
import { Card , Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function ProductCards({ item, onClick, buyNow, key }) {
    

    const Clicked = (props) => {
      localStorage.setItem('productData', JSON.stringify(props))
  }

    return (
        <>
            <Card className="my-3 p-3 rounded" style={{ width: '18rem' }}>
            <Link to={`/product`} onClick={() => Clicked(item)}>
                <Card.Img variant="top" alt='' src={item.thumbnail} />
            </Link>
                <Card.Body>
                    <Card.Title><strong>{item.brand}</strong></Card.Title>
                    <Card.Text>
                        <strong>{item.title}</strong>
                    </Card.Text>
                    <Card.Text>
                        <strong>Price : {item.price}</strong>
                    </Card.Text>
                    <Card.Text>
                        <strong>{item.description}</strong>
                    </Card.Text>

                    <Button variant="primary" onClick={() => onClick(item)}>Add to Cart</Button>
                    <br></br>
                    <br></br>
                    <Button variant="primary" onClick={() => buyNow(item)}>Buy Now</Button>
                </Card.Body>
            </Card>
        </>
    )
}