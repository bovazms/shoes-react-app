import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";
import { MyContext } from "./MyContext";

function Login() {
  const { user, setLogin, login, bannedUsers, } = useContext(MyContext);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    const foundUser = user.find((user) => user.email === emailValue);
    console.log(login);

    if (foundUser && foundUser.password === passwordValue) {
      setLogin(true)
      console.log(login);
      navigate("/");
      alert("Login successful");
    } else {
      alert("Invalid username or password");


    }

  }



  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email: <input type="email" placeholder="enter your email" ref={emailRef} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" placeholder="enter your password" ref={passwordRef} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <div>
        <h6 style={{ color: "black" }}>
          Don't have an account? <Link to="/Registration">Create </Link>
        </h6>
      </div>
    </div>
  );
}

export default Login;