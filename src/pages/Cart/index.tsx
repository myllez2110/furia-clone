import React from 'react';
import { PageContainer, PageTitle, CartSection, CartItem, CartSummary } from '../styles';

export const Cart: React.FC = () => {
  const cartItems = [
    {
      id: 1,
      name: 'JAQUETA FURIA X ZOR VERDE MILITAR',
      price: 399.00,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <PageContainer>
      <PageTitle>SHOPPING CART</PageTitle>
      <CartSection>
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>R$ {item.price.toFixed(2)}</p>
                <div className="quantity">
                  <button>-</button>
                  <span>{item.quantity}</span>
                  <button>+</button>
                </div>
              </div>
            </CartItem>
          ))}
        </div>
        <CartSummary>
          <h3>ORDER SUMMARY</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>R$ {total.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>FREE</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>R$ {total.toFixed(2)}</span>
          </div>
          <button>CHECKOUT</button>
        </CartSummary>
      </CartSection>
    </PageContainer>
  );
};