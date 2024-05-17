import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './Viewproduct.css';
import Navebar from './Navebar';
import Login from './Login';
import { MyContext } from './MyContext';


const Viewproduct = () => { 
  const { products, cart, setCart,login, isliked,setIsliked } = useContext(MyContext);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const details  = products.filter((e) => e.id === parseInt(id) );
  console.log(details);

  const addTocart = (item) => {
    console.log(login);
    if(login) {
      const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      alert('Product is already in the cart');
    } else {
       
      if (Login) {
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

  const addToWishlist  = (item) => {

    const existingItem = isliked.find((cartItem) => cartItem.id === item.id);
    
    if (existingItem) {
      alert('Product is already in your wishlist');
    }
    else if(!existingItem){
      const updatedWishlist = [...isliked, { ...item, quantity: 1 }];
      setIsliked(updatedWishlist);
      alert(`${item.title} successfully added to your wishlist!`);
    } 

     
    

}

  return (
    <div>
      <div>
        <Navebar />
      </div>
      <div className="container">
        {details .map((e) => {
          return (
            <Card key={e.id}>
              <div className="d-flex flex-column flex-lg-row w-100 align-items-center">
                <Card.Img className="w-50" variant="top" src={e.image} />

                  <Card.Body style={{ position: 'relative' }}>
  <Card.Title>
                  
                             <Card.Title>{e.state}* </Card.Title>
              <br/>
                    <h2>{e.title}</h2>
                    <h5>{e.type}</h5>
                  </Card.Title>
                  <Card.Text>
                    <Card.Text>₹{e.price}</Card.Text>
                    <Card.Text>₹{e.price} - {e.offer}% off : ₹{ e.price - e.price/100 * e.offer }</Card.Text>

                    <Card.Text>{e.offer} % offer applied</Card.Text>
                    
                    <br />
                    <p>{e.description}</p>
                   
                  </Card.Text>
                  <hr></hr>
                  <Button
                    onClick={() => {
                      addTocart(e);
                    }}
                    variant="primary"
                  >
                    ADD TO CART
                  </Button> <hr></hr>  

                  <Button
                    onClick={() => {
                      addToWishlist(e); 
                    }}
                    variant="primary"
                  >
                    ADD TO WISHLIST
                  </Button>
                </Card.Body>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Viewproduct;