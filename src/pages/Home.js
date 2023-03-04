import React from 'react'
import {  Routes, Route } from 'react-router-dom';
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import Welcome from '../components/Welcome'
import ProductList from '../components/ProductList';
import ProductDetails from '../components/ProductDetails';
import Cart from './Cart';


function Home() {
  return (
    <div className='w-full bg-gray-100'>
        <Navbar/>
        <div className='p-2 box-border px-10 pb-16'>
          <Routes>
              <Route path="/" element={<Welcome />} />
              {/* {backup route for github glitch} */}
              <Route path="ecommerce-react-task/" element={<Welcome />} />
              <Route path='products' element={<ProductList />} />
              <Route path="products/:id" element={<ProductDetails />} />
              <Route path="cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer/>
    </div>
  )
}

export default Home