import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.css";
import { MyContext } from "./MyContext";

function Registration() {
  const { user, setUser } = useContext(MyContext);
  const nameRef = useRef({});
  const emailRef = useRef({});
  const passwordRef = useRef({});
  const phnoRef = useRef({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields
    if (
      !nameRef.current.value ||
      !emailRef.current.value ||
      !passwordRef.current.value ||
      !phnoRef.current.value 
    ) {
      alert("Please fill in all the fields");
      return;
    }

    // Form fields are valid, proceed with registration
    const nameValue = nameRef.current.value;
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;
    const phnoValue = phnoRef.current.value;

    setUser([
      ...user,
      {
        name: nameValue,
        email: emailValue,
        password: passwordValue,
        phno: phnoValue,
        id: Date.now(),
      },
    ]);

    navigate("/Login");
  };

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input type="text" placeholder="Enter your name" ref={nameRef} />
        </label>
        <br />
        <label>
          Email: <input type="email" placeholder="Enter your email" ref={emailRef} />
        </label>
        <br />
        <label>
          Phno: <input type="number" placeholder="Enter your phone number" ref={phnoRef} />
        </label>
        <br />
        <label>
          Password: <input type="password" placeholder="Enter your password" ref={passwordRef} />
        </label>
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
