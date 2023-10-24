import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

function Home() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const productsPerPage = 15;

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToDisplay = filteredProducts.slice(startIndex, endIndex);

  // Función para ir a la página anterior
  const goToPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  // Función para ir a la página siguiente
  const goToNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="home">
      <h2 className="principal">Bienvenido al MarketPlace</h2>
      <div className="header-search">
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <i className="material-icons">
          <ManageSearchIcon />
        </i>
      </div>

      <div className="product-list">
        {productsToDisplay.map((product) => (
          <div key={product.id} className="card">
            <img
              src={product.images[0]}
              alt={product.title}
              className="imagenProducto"
            />
            <h3 className="title">{product.title}</h3>
            <span className="price">$ {product.price}</span>
            <div className="card-overlay">
              <Link to={`/product/${product.id}`} className="card-link">
                Ver más
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={goToPreviousPage}>Anterior</button>
        <button onClick={goToNextPage}>Siguiente</button>
      </div>
    </div>
  );
}

export default Home;
