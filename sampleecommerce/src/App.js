import './App.css';
import React, { useEffect } from 'react';
import LoginPage from './pages/login';
import HomePage from './pages/home';
import CartsPage from './pages/carts';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from './pages/products';
import ProductDetailsPage from "./pages/product-details-page"
import PrivateRoutes from "./pages/private-routes";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product-details-page" element={<ProductDetailsPage />} />
            <Route path="/carts" element={<CartsPage />} />
          </Route>
          <Route path="/" element={<LoginPage />} />
         
          <Route path="/login" element={<LoginPage />} />
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
