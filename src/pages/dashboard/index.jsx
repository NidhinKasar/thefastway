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
  const [filterData, setFilterData] = useState()

  useEffect(() => {
    getAPI('https://dummyjson.com/products?limit=100').then((response) => {
      setProductData(response.products)

      let testArray = response.products.length > 0 && response.products.map((item) => { return item.category })

      const uniqueArray = testArray && testArray.length > 0 && testArray.filter((value, index, self) => {
             return self.indexOf(value) === index;
      });
         
      let modalTestArray = response.products && response.products.length > 0 && response.products.map((item) => { return item.brand })
     
      const uniqueModalArray = modalTestArray && modalTestArray.length > 0 && modalTestArray.filter((value, index, self) => {
         return self.indexOf(value) === index;
     });
         
         localStorage.setItem('categories', JSON.stringify(uniqueArray))
         localStorage.setItem('model', JSON.stringify(uniqueModalArray))
    })
  }, [])



  // const onHover = () => {
  //     setFilter(true)
  // }
  
  const applyCategoryFilter = (props) => {
    setFilter(true)
    let filteredData = productData.filter((item) => item.category === props)
    setFilterData(filteredData)
  }

  const applymodelFilter = (props) => {
    setFilter(true)
    let filteredData = productData.filter((item) => item.brand === props)
    setFilterData(filteredData)
  }
  
  return (
    <div>
      <Header />
      {productData && <div style={{display:'flex' , justifyContent:'center'}}>
         <Dropdown text={'Filter By Category'} applyFilterFromDropdown={applyCategoryFilter} />
        <Dropdown text={'Filter By Model'} applyFilterFromDropdown={applymodelFilter} />
      </div>}
      <Products data={ filter ? filterData : productData} />

    </div>
  )
}

export default Dashboard 