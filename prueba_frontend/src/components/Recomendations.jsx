import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Recomendations() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Realiza una solicitud para obtener la lista de productos
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        // Ordena los productos por precio de menor a mayor
        const sortedProducts = response.data.sort((a, b) => a.price - b.price);

        // Toma los primeros 10 productos (los más económicos)
        const recommendedProducts = sortedProducts.slice(0, 10);

        setProducts(recommendedProducts);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  return (
    <div className="home">
      <h2 className="principal">Productos Recomendados (Más Económicos)</h2>
      <ul>
        <div className="product-list">
          {products.map((product) => (
            <li key={product.id} className="card">
              <img src={product.images[0]} alt={product.title} className="imagenProducto" />
              <p className="title">{product.title}</p>
              <p className="price">Precio: ${product.price}</p>
              <div className="card-overlay">
              <Link to={`/product/${product.id}`} className="card-link">
                Ver más
              </Link>
            </div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default Recomendations;
