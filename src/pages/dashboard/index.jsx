import React, { useState } from 'react'
import { useEffect } from 'react'
import { getAPI } from '../../api'
import Header from '../../components/header'
import Products from '../../components/product'

const Dashboard = () => {

  const [productData, setProductData] = useState()
  
  useEffect(() => {
    getAPI('https://dummyjson.com/products?limit=100').then((response) => {
      setProductData(response.products)
    })
  }, [])
  
  return (
    <div>
      <Header />
      <Products data={productData}/>
    </div>
  )
}

export default Dashboard 