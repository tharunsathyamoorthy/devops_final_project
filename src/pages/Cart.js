import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cartItems }) {
  return (
    <div>
      <h1>Your Cart</h1>
      <Link to="/">Back to Products</Link>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <img className="cart-img" src={process.env.PUBLIC_URL + item.img} alt={item.name} />
              <div className="cart-title">{item.name}</div>
              <div className="cart-price">{item.price}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
