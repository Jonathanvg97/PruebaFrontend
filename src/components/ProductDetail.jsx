import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ProductCart from "./ProductCart";
import { useCart } from "./CartContext";
import "../styles/ProductDetails.css";
import almacen from "../assets/almacen.png";
import Swal from "sweetalert2"; // Importa SweetAlert

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const { addToCart } = useCart();

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



  return (
    <div>
      <img className="banner" src={almacen} alt="banner Principal" />
      <div className="product-details">
        <img
          className="product-image"
          src={product ? product.images[0] : ""}
          alt={product ? product.title : ""}
        />
        <div className="product-info">
          <h2>{product ? product.title : "Cargando..."}</h2>
          <p>ID: {product ? product.id : ""}</p>
          <p className="descripcion">
            {product ? product.description : "Cargando..."}
          </p>
          <p className="precio">
            Precio: ${product ? product.price : "Cargando..."}
          </p>
          <div className="botones">
            <button
              className="add-to-cart"
              onClick={() => {
                addToCart(product);
                setShowCart(true);
                // Utiliza SweetAlert para mostrar un mensaje
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Producto agregado al carrito",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }}
            >
              Agregar al carrito
            </button>
            <Link to="/">
              <button className="go-back">Volver a Home</button>
            </Link>
          </div>
        </div>
      </div>
      <ProductCart />
    </div>
  );
}

export default ProductDetails;
