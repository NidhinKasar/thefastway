//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Dashboard from './pages/dashboard/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Productpage from './pages/productpage/productpage';
import Cart from './pages/cart/cart';
import { Provider } from 'react-redux';
import store from './store/toolskitStore';


function App() {
  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/home' element={<Dashboard/>}    />
          <Route path='/product' element={<Productpage />} />
          <Route path='/cart' element={<Cart/>} />

        </Routes>
        </BrowserRouter>
        </Provider>
    </div>
  )
}

export default App;
