import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Cart.css';
import Navebar from './Navebar';
import { useNavigate } from 'react-router-dom';
import { MyContext } from './MyContext';

function Cart() {
  const { cart, setCart } = useContext(MyContext);
  const navigate = useNavigate()


  const removeItem = (e) => {
    const removeItemId = parseInt(e.target.id);
    const newItems = cart.filter((item) => item.id !== removeItemId);
    setCart(newItems);
  };

  const addQty = (id) => {
    const newQty = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setCart(newQty);
  };

  const removeQty = (id) => {
    const newQty = cart.map((item) =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    );
    setCart(newQty);
  };

  const calculateTotal = () => {

    return cart.reduce((total, item) => {
      const discountedPrice = item.price - (item.price * item.offer) / 100;
      return total + discountedPrice * item.qty || 1;
    }, 0);


  };
  const amount = calculateTotal()




  return (
    <div>
      <div>
        <Navebar />
      </div>
      <div className="container">
        <div className="row">
          <h1 style={{ fontSize: "50px", color: "black" }}>Your Cart</h1>

          {cart.map((item) =>
          (

            <Card key={item.id} className="w-25 col-4">
              <Card.Img variant="top" src={item.image} className="w-100" />
              <Card.Body>
                <Card.Title><h4>{item.title}</h4></Card.Title>
                <Card.Text>
                  <h5>Price: ₹{item.price - item.price / 100 * item.offer}</h5>

                </Card.Text>
                <Card.Text> <h6>Quantity: {item.qty}</h6></Card.Text>

                <button onClick={() => removeQty(item.id)}>- Qty</button>
                <button onClick={() => addQty(item.id)}>+ Qty</button>
                <button id={item.id} onClick={removeItem}>
                  Remove Item
                </button>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className="payment-section">
          {cart.length > 0 && (
            <>
              <h3>Total Amount: ₹{calculateTotal()}</h3>
              <Button variant="primary" onClick={() => navigate(`/Payment/${amount}`)}  >
                Proceed to Payment
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;