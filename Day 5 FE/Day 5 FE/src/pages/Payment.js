import React, { useState } from 'react';
import './Payment.css';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle payment submission
    console.log('Payment submitted');
  };

  return (
    <>
        <div className="image-container">
        <img src='https://img.freepik.com/free-vector/credit-card-concept-illustration_114360-2526.jpg?t=st=1722268107~exp=1722271707~hmac=938b6a8cdcfa61445d49c8049c7331d7d909d1d9ea354e9d406376014ced7a28&w=740' alt='payment'/>
'       </div>
    <div className="payment-container">
      <h2>Payment</h2>
      <form onSubmit={handlePaymentSubmit}>
        <div className="payment-method">
          <label>
            <input
              type="radio"
              value="credit"
              checked={paymentMethod === 'credit'}
              onChange={handlePaymentMethodChange}
            />
            Credit Card
          </label>
          <label>
            <input
              type="radio"
              value="debit"
              checked={paymentMethod === 'debit'}
              onChange={handlePaymentMethodChange}
            />
            Debit Card
          </label>
          <label>
            <input
              type="radio"
              value="upi"
              checked={paymentMethod === 'upi'}
              onChange={handlePaymentMethodChange}
            />
            UPI
          </label>
        </div>

        {paymentMethod === 'credit' || paymentMethod === 'debit' ? (
          <div className="card-details">
            <div className="form-group">
              <label>Card Number</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Expiration Date</label>
              <input type="month" required />
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Account Holder Name</label>
              <input type="text" required />
            </div>
          </div>
        ) : (
          <div className="upi-details">
            <div className="form-group">
              <label>UPI ID</label>
              <input type="text" required />
            </div>
          </div>
        )}

        <button type="submit" className="make-payment-button">
          Make Payment
        </button>
      </form>
    </div>
    </>
  );
};

export default Payment;
