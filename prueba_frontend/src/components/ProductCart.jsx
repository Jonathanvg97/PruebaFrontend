import React, { useState, useEffect } from "react";
import "../styles/Cart.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useCart } from "./CartContext";

function ProductCart() {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } =
    useCart();
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    // Abre el carrito si hay elementos en el carrito al cargar la página
    if (cart && cart.length > 0) {
      // Verifica que cart no sea undefined
      setShowCart(true);
    }
  }, [cart]);

  const openCart = () => {
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  const totalWithoutIVA = cart
    ? cart.reduce((acc, item) => {
        const itemTotal = item.price * item.quantity;
        return acc + itemTotal;
      }, 0)
    : 0;

  const IVA = totalWithoutIVA * 0.19; // 19% de IVA
  const totalWithIVA = totalWithoutIVA + IVA;

  const saveCartToLocalStorage = () => {
    console.log('Guardando carrito en el localStorage');

    // Crea un objeto para almacenar el carrito y el total con IVA
     // Validar que cart y totalWithIVA sean objetos válidos
  if (cart && totalWithIVA) {
    const cartData = {
      cart,
      totalWithIVA,
    };
    console.log(cartData)

    // Convierte el objeto a JSON y almacénalo en el localStorage
    localStorage.setItem('cart', JSON.stringify(cartData));
  }
};

  // Función para formatear números a dos decimales
  const formatToTwoDecimals = (number) => {
    return parseFloat(number).toFixed(2);
  };

  return (
    <div>
      <button className="open-cart" onClick={openCart}>
        <ShoppingCartIcon />
      </button>
      {showCart && (
        <div className="product-cart">
          <h2 className="cartTitle">Carrito de Compras</h2>
          <ul>
            {cart
              ? cart.map((item) => (
                  <li key={item.id}>
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="productimage"
                    />
                    <span className="descripCart">
                      {item.title} ${formatToTwoDecimals(item.price)} x {item.quantity} = $
                      {formatToTwoDecimals(item.price * item.quantity)}
                    </span>
                    <button onClick={() => decrementQuantity(item.id)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item.id)}>
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="remove-button"
                    >
                      <DeleteForeverIcon />
                    </button>
                  </li>
                ))
              : null}
          </ul>
          <div className="cart-total">
            <strong>Total sin IVA: ${formatToTwoDecimals(totalWithoutIVA)}</strong>
            <br />
            <strong>IVA (19%): ${formatToTwoDecimals(IVA)}</strong>
            <br />
            <strong>Total con IVA: ${formatToTwoDecimals(totalWithIVA)}</strong>
          </div>
          <button onClick={saveCartToLocalStorage}>Guardar</button>
          <button className="open-cart" onClick={closeCart}>
            <ShoppingCartIcon />
          </button>
          <button onClick={closeCart}>Cerrar Carrito</button>
        </div>
      )}
    </div>
  );
}

export default ProductCart;
