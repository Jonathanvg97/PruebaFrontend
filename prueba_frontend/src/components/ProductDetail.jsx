import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/ProductDetails.css";
import almacen from '../assets/almacen.png'

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
        <img className="banner" src={almacen} alt="banner Principal" />
    <div className="product-details">
      <img
        className="product-image"
        src={product.images[0]}
        alt={product.title}
      />
      <div className="product-info">
        <h2>{product.title}</h2>
        <p>ID: {product.id}</p>
        <p className="descripcion">{product.description}</p>
        <p className="precio">Precio: ${product.price}</p>
        <div className="botones">
          <button className="add-to-cart">Agregar al carrito</button>

          <Link to="/">
            <button className="go-back">Volver a Home</button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProductDetails;
