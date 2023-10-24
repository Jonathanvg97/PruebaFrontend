// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Home from "./components/Home";
// import ProductDetails from "./components/ProductDetail";
// import ProductCart from "./components/ProductCart";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/product/:id" element={<ProductDetails />} />
//           <Route path="/cart" element={<ProductCart />} /> 
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetail";
import ProductCart from "./components/ProductCart";
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
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
