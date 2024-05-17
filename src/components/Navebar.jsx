import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BiSolidUserPin, BiLogOutCircle } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai"
import { RiAdminFill } from 'react-icons/ri'
import { useContext } from "react";
import "./Navebar.css";
import { MyContext } from "./MyContext";



function Navebar() {
  const { setLogin, login, setCart, searchinput, setSearchInput } = useContext(MyContext);
  const navigate = useNavigate()

  const handleLogout = () => {
    if (login) {
      setLogin(false);
      setCart([])
      alert('logged out successfully')
    } else {
      alert("please log in")
      navigate('/Login')
    }
  };


  function handlesearch() {
    console.log("in se:" + searchinput);
    if (searchinput.toLowerCase().includes("all")) {
      navigate('/Collection')
    }
    else if (searchinput.toLowerCase().includes("me")) {
      navigate('/Men')
    }
    else if
      (searchinput.toLowerCase().includes("wo")) {
      navigate('/Women')
    }
    else if
      (searchinput.toLowerCase().includes("ad")) {
      navigate('/Adidas')
    }
    else if
      (searchinput.toLowerCase().includes("pu")) {
      navigate('/Puma')
    }
    else if
      (searchinput.toLowerCase().includes("ni")) {
      navigate('/Nike')
    }
    else if
      (searchinput.toLowerCase().includes("cart")) {
      navigate('/Cart')
    }
    else if
      (searchinput.toLowerCase().includes("register")) {
      navigate('/Registration')
    }
    else if
      (searchinput.toLowerCase().includes("login")) {
      navigate('/Login')
    }

    setSearchInput('')

  }

  return (
    <div>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/" >S U P R E M E</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className=" w-100">

              <Link to="/Collection" className="nav-link">
                COLLECTION
              </Link>
              <Link to="/Men" className="nav-link">
                MEN
              </Link>
              <Link to="/Women" className="nav-link">
                WOMEN
              </Link>
              <Link to='/Cart' className="nav-link">
                CART
              </Link>
              <Link to='/Login' className="nav-link">
                LOGIN
              </Link>
              <Link to='/wishlist' className="nav-link">
                WISHLIST
              </Link>
              <Link to="/Lookbook" className="nav-link">
                LOOKBOOK
              </Link>

              <input placeholder="search for products" type="text" value={searchinput}
                onChange={(e) => setSearchInput(e.target.value)} />
              <button onClick={handlesearch}>search</button><br>
              </br>

              <div className="ms-auto heyy ">
                <Link to="#" className="login" onClick={handleLogout}>
                  {login ? <BiLogOutCircle /> : null}
                </Link>
                <Link to="/Contact" className="login">
                  <AiOutlineMessage />
                </Link>
                <Link to="/login" className="login">
                  <BiSolidUserPin />
                </Link>
                <Link to="/Adminlogin" className="login">
                  <RiAdminFill />
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navebar;



