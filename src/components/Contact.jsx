import React from 'react';
import { RiShoppingCart2Line, RiInformationLine,  } from 'react-icons/ri';
import { FcLike } from "react-icons/fc";
import './Contact.css';


function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-row">
        <div className="contact-column">
          <h3>
            <RiShoppingCart2Line /> Products &amp; Order
          </h3>
        </div>
        <div className="contact-column">
          <h3>
            <RiInformationLine /> Info &amp; Enquiries
          </h3>
        </div>
        <div className='contact-column'>

        </div>
      </div>

      <div>
        <h3>Contact Form</h3>
        <form className="contact-form">
          <label>
            Name:
            <input type="text" />
          </label>
          <br />
          <label>
            Email:
            <input type="email" />
          </label>
          <br />
          <label>
            Message:
            <textarea rows="5" />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;