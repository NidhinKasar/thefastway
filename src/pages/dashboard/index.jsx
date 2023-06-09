import React, { useState } from 'react'
import { useEffect } from 'react'
import { getAPI } from '../../api'
import Header from '../../components/header'
import Products from '../../components/product'
import FilterModal from '../../components/filter'
import Dropdown from '../../components/dropdown'

const Dashboard = () => {

  const [productData, setProductData] = useState()
  const [filter, setFilter] = useState(false)

  useEffect(() => {
    getAPI('https://dummyjson.com/products?limit=100').then((response) => {
      setProductData(response.products)
    })
  }, [])

  // const onHover = () => {
  //     setFilter(true)
  // }
  
  const applyFilter = (props) => {
    setFilter(true)
    let filteredData = productData.filter((item) => item.category === props)
    setProductData(filteredData)
  }
  
  return (
    <div>
      <Header />
      {productData && <div style={{display:'flex' , justifyContent:'center'}}>
         <Dropdown text={'Filter By Category'} applyFilterFromDropdown={applyFilter} />
        <Dropdown text={'Filter By Model'} applyFilterFromDropdown={applyFilter} />
      </div>}
      <Products data={productData} />

    </div>
  )
}

export default Dashboard 