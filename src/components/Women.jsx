import React, { useContext } from "react";
import { Card } from 'react-bootstrap';
import Navebar from './Navebar';
import { useNavigate } from 'react-router-dom';
import { MyContext } from "./MyContext";


function Women() {
  const {products} = useContext(MyContext)
  console.log("product list", products);
  const WomensShoe = products.filter((e) => e.type === "Women's Shoes");
  const Navigate = useNavigate()
  console.log(WomensShoe);
  return (
    <div>
       <div>
        <Navebar />
      </div>
      <div className="container gap-5">
        <div className=" row " style={{ background: " rgb(230, 230, 217)" }}>
          <h1 style={{ fontSize: "50px" ,color:'black' }}>Women</h1>

          {WomensShoe.map((e) => {
            return (
              <div
                onClick={() =>Navigate(`/Viewproduct/${e.id}`)}
                className="col-lg-4 col-6 mt-3"
              >
                <Card style={{ maxwidth: "48rem" }} className="hovereffect">
                  <Card.Img variant="top" src={e.image} />
                  <Card.Body>
                  <Card.Title>{e.state}* </Card.Title><br/>

<Card.Title>{e.title}</Card.Title>
<Card.Title>{e.type}</Card.Title>
<Card.Text>₹{e.price}</Card.Text>
<Card.Text>₹{e.price} - {e.offer}% off : ₹{ e.price - e.price/100 * e.offer }</Card.Text>

                  </Card.Body>
                </Card>{" "}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Women