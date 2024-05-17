import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Cart.css';
import Navebar from './Navebar';
import { useNavigate, useParams } from 'react-router-dom';
import { MyContext } from './MyContext';

function Wishlist() {
  const { products,isliked,setIsliked,cart,setCart,login } = useContext(MyContext);
  const navigate = useNavigate()
const {id }= useParams
  const details  = products.filter((e) => e.id === parseInt(id) );
  console.log(details );

  
  const addTocart = (item) => {
    console.log(login);
    if(login) {
      const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      alert('Product is already in the cart');
    } else {
       
      if (login) {
        const updatedCart = [...cart, { ...item, quantity: 1 }];
        setCart(updatedCart);
        alert(`${item.title} successfully added to the cart!`);
      } else {
        navigate('/Login');
      }
    }}else{
      alert("please login first")
      navigate('/Login');

  }};
    
  const removeItem = (e) => {
    const removeItemId = parseInt(e.target.id);
    const newItems = isliked.filter((item) => item.id !== removeItemId);
    setIsliked(newItems);
  };
 

  return (
    <div>
      <div>
        <Navebar />
      </div>
      <div className="container">
        <div className="row">
        <h1 style={{ fontSize: "50px", color: "black" }}>Your Wishlist</h1>

          {isliked.map((e) =>  
          (
           
            <Card key={e.id} className="w-25 col-4">
              <Card.Img variant="top" src={e.image} className="w-100" />
              <Card.Body>
                <Card.Title><h4>{e.title}</h4></Card.Title>
                <Card.Text>
                  <h5>Price: ₹{e.price - e.price/100 * e.offer }</h5>
                  <Card.Text>₹{e.price} - {e.offer}% off : ₹{ e.price - e.price/100 * e.offer }</Card.Text>

                </Card.Text>
                <Card.Text> <h6>Quantity: {e.qty}</h6></Card.Text><hr></hr>
                <Button
                    onClick={() => {
                      addTocart(e);
                    }}
                    variant="primary"
                  >
                    ADD TO CART
                  </Button> <hr></hr>  


                <button id={e.id} onClick={removeItem}>
                  Remove Item
                </button>
              </Card.Body>
            </Card>
          ))}
        </div>
       
      </div>
    </div>
  );
}

export default Wishlist;