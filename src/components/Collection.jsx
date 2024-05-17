import React from "react";
import { Card,Button } from "react-bootstrap";
import Navebar from "./Navebar";
import "./Collection.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "./MyContext";


function Collection() {
  const{products}=useContext(MyContext)
  const Navigate = useNavigate();
  console.log("Products",products);
  

  return (
    <div>
      <div>
        <Navebar />

      </div>
      <div className="container gap-5">
        <div className=" row " style={{ background: " rgb(230, 230, 217)" }}>
          <h1 style={{ fontSize: "50px", color: "black" }}>Collections</h1>

          {products.map((e) => {
            return (

              <div
                onClick={() => Navigate(`/Viewproduct/${e.id}`)}
                className="col-lg-4 col-6 mt-3"
              >
                <div  onClick={()=> Navigate(`/Viewproduct/${e.id}`)}  >
                
                <Card style={{ maxwidth: "48rem" }} className="hovereffect">
                  <Card.Img variant="top" src={e.image} />

                  <Card.Body style={{ position: 'relative' }}>

                  <Card.Title>{e.state}* </Card.Title><br/>
                  
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Title>{e.type}</Card.Title>
                    <Card.Text>₹{e.price}</Card.Text>

                    <Card.Text>₹{e.price} - {e.offer}% off : ₹{ e.price - e.price/100 * e.offer }</Card.Text>
 
                  </Card.Body>
                </Card>{" "}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Collection;