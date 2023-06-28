import React from 'react'
import './ProductCards.css';
import { useNavigate } from 'react-router-dom';

export default function ProductCards({ item, onClick, buyNow, key }) {
    
    const navigate = useNavigate();

  const Clicked = (props, event) => {
    if (event.target.tagName !== 'BUTTON') {
       localStorage.setItem('productData', JSON.stringify(props))
       navigate('/product')
    }
      console.log(event.target.tagName);
        
    }
    

    return (
      <div className="product-card" onClick={(event)=> Clicked(item, event)}>
        <img src={item.thumbnail} alt="Product 1" className="product-image" />
            <h3 className="product-title">{item.title}</h3>
            <p className="product-description">{item.description}</p>
            <div className="product-price">Price: ${item.price}</div>
        <button onClick={() => onClick(item)} className="add-to-cart-button">Add to Cart</button>
      </div>

    )
}