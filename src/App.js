//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Dashboard from './pages/dashboard/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Productpage from './pages/productpage/productpage';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/home' element={<Dashboard/>}    />
          <Route path='/product' element={<Productpage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
