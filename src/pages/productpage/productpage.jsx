import React from 'react'
import Header from '../../components/header'
import { Card , Button } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Productpage = () =>  {

  const location = useLocation();
  const {state} = location
  const productData = JSON.parse(localStorage.getItem('productData')) || {}
  
  let images = productData && productData.images

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
   // variableWidth: true
  };

  return (
      <>
      <Header catergoryFocus={() => console.log('Focus')}/>
      <div style={{display:'flex'}}>
        <Card className="my-3 p-3 rounded" style={{ width: '50%', height: '50%', justifyContent:'center' }}>
          {images && images.length > 0 && <Slider {...settings}>
            {images && images.length > 0 && images.map((item) => {
              return (
                <div>
                  <img src={item} />
                </div>
              )
            })}
          </Slider>
          }
        </Card>
        <Card className="my-3 p-3 rounded" style={{ width: '50%', height: '50%' }}>
         
        <Card.Body>
                    <Card.Title><strong>{productData.brand}</strong></Card.Title>
                    <Card.Text>
                        <strong>{productData.title}</strong>
                    </Card.Text>
                    <Card.Text>
                        <strong>Price : {productData.price}</strong>
                    </Card.Text>
                   <Card.Text>
                        <strong>Rating: {productData.rating}</strong>
                 </Card.Text>
                 <Card.Text>
                        <strong>Discount: {productData.discountPercentage} %</strong>
                    </Card.Text>
                    <Card.Text>
                        <strong>{productData.description}</strong>
                </Card.Text>

                    <Button variant="primary" onClick={''}>Add to Cart</Button>
                    <br></br>
                    <br></br>
                    <Button variant="primary" onClick={'() => buyNow(productData)'}>Buy Now</Button>
                </Card.Body>
          
      </Card>
   
      </div>
      </>
  )
}

export default Productpage