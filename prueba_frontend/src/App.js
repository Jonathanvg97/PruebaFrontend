import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetail";
import ProductCart from "./components/ProductCart";
import Footer from "./components/Footer"
import Recomendations from "./components/Recomendations";
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <CartProvider>
      <ProductCart />
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<ProductCart />} />
            <Route path="/recomendations" element={<Recomendations />} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
