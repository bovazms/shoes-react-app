import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MyContext } from "./components/MyContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { useState } from "react";
import Registration from "./components/Registration";
import { shoeProducts } from "./components/Products";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Collection from "./components/Collection";
import Contact from "./components/Contact";
import Lookbook from "./components/Lookbook";
import Men from "./components/Men";
import Payment from "./components/Payment";
import Viewproduct from "./components/Viewproduct";
import Women from "./components/Women";
import AddProduct from "./Admin/Addproduct";
import Adminlogin from "./Admin/Adminlogin";
import Adminproducts from "./Admin/Adminproducts";
import Adminusers from "./Admin/Adminusers";
import Sidebar from "./Admin/Sidebar";
import Updateproduct from "./Admin/Updateproduct";
import Adidas from "./components/Adidas";
import Puma from "./components/Puma";
import Nike from "./components/Nike";
import Wishlist from "./components/Wishlist";
import Navebar from "./components/Navebar";


function App() {

  const [login, setLogin] = useState(false)
  const [user, setUser] = useState([]);
  const [products, setProducts] = useState(shoeProducts);
  const [cart, setCart] = useState([])
  const [isliked,setIsliked] =useState([])
  const [admin, setAdmin] = useState({ username: 'admin', password: 'admin123' })
  const [searchinput, setSearchInput] = useState("");
  const [bannedUsers, setBannedUsers] = useState([]);


  const values = {
    user, setUser,
    login, setLogin,
    products, setProducts,
    cart, setCart,
    admin, setAdmin,
    searchinput, setSearchInput,
    isliked,setIsliked,
    bannedUsers, setBannedUsers,
  }

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Login" element={<Login />} />
             
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="/Collection" element={<Collection/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Lookbook" element={<Lookbook/>} />
          <Route path="/Men" element={<Men/>} />
          <Route path="/Payment/:id" element={<Payment/>} />
          <Route path="/Viewproduct/:id" element={<Viewproduct/>} />
          <Route path="/Women" element={<Women/>} />
          <Route path="/Adidas" element={<Adidas/>} />
          <Route path="/Puma" element={<Puma/>} />
          <Route path="/Nike" element={<Nike/>} />


          <Route path="/Addproduct" element={<AddProduct/>} />
          <Route path="/Adminlogin" element={<Adminlogin/>} />
          <Route path="Adminproducts/" element={<Adminproducts/>} />
          <Route path="Adminusers/" element={<Adminusers/>} />
          <Route path="/Sidebar" element={<Sidebar/>} />
          <Route path="/Updateproduct/:id" element={<Updateproduct/>} />




        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
 

// Wishlist.jsx
// Navebar.jsx
// Collection.jsx
// App.jsx
// Viewproduct.jsx need to edit this much pages for back(without wishlist page)