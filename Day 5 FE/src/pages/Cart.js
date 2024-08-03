import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, getTotalValue } = useContext(CartContext);
  const navigate = useNavigate();

  const handleRemove = (itemToRemove) => {
    removeFromCart(itemToRemove);
  };

  const handleCheckout = () => {
    // Navigate to the payment portal route
    navigate('/payment');
  };

  return (
    <div className="cart-container">
      <div className="cart-items">
        <h2>Shopping Cart</h2>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="cart-item-info">
                <h3>{item.name} (Class {item.class})</h3>
                <p>{item.description}</p>
                <p>Price: ₹{item.price}</p>
              </div>
              <button className="remove-button" onClick={() => handleRemove(item)}>Remove</button>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <div className="cart-summary">
        <div className="cart-image"></div>
        <div className="cart-total">
          <h3>Total Value: ₹{getTotalValue()}</h3>
        </div>
        <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
