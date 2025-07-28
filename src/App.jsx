import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/homePage/home'
import Home from './components/homePage/home'
import Shop from './components/shopPage/Shop'
import ShopBag from './components/shoppingBag/shoppingBag'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductPage from './components/shopPage/productPage';
import { CartProvider } from './components/context/cartContext'

function App() {

  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />}> </Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="/bag" element={<ShopBag/>}></Route>
          <Route path="/product/:id" element={<ProductPage/>}></Route>
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
