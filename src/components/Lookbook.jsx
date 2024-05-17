import React from 'react';
import "./Lookbook.css"
import Navbar from "./Navebar";

function Lookbook() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="lookbook-container">
        <div className="lookbook-image">
          <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_626,c_limit/90fd75ee-4ca3-44ee-a3f6-d5a09a8d88a7/nike-lookbook.jpg" alt="LookbookImage" />
        </div>
        <div className="lookbook-content">
          <h3>Active Lifestyle</h3>
          <h3>

            Explore what's possible, in items inspired by adventure. The changing needs and temperatures of Oregon's Smith Rock led our designers to create these rugged trousers that convert to shorts with just one zip. Up top, a water-repellent wool blend helps keep you dry, warm and ready for anything.</h3>
        </div>
      </div>

      <div className="lookbook-container">
        <div className="lookbook-content">
          <h3>Adventurer Gear</h3>
          <h4>
            Surround yourself with softness. Our latest version of the Infinity Run stacks soft and springy React foam extra high to cushion each step. Keep the comfort coming with layers of lightweight performance fabric that wick away sweat to keep you dry.</h4>
        </div>
        <div className="lookbook-image">
          <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_626,c_limit/94a39cb7-65d5-4113-a9e9-61f1f032e9e4/nike-lookbook.jpg" alt="Lookbook" />
        </div>
      </div>

      <div className="lookbook-container">
        <div className="lookbook-image">
          <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_900,c_limit/1959de7b-2f21-453f-a592-df577eb26aec/nike-lookbook.jpg" alt="Lookbook" />
        </div>
        <div className="lookbook-content">
          <h3>Go & Play</h3>
          <h4>
            Swooping panels and pops of piping on this basketball set nod to the '80s, when we released an ad asking, "Who said woman was not meant to fly?" Ground the look with footwear from the same era that transcends its on-court roots into the realm of icon.</h4>
        </div>
      </div>

      <div className="lookbook-container">
        <div className="lookbook-content">
          <h3>Fall/Winter</h3>
          <h4>
            Surround yourself with softness. Our latest version of the Infinity Run stacks soft and springy React foam extra high to cushion each step. Keep the comfort coming with layers of lightweight performance fabric that wick away sweat to keep you dry.</h4>
        </div>
        <div className="lookbook-image">
          <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_626,c_limit/0859869b-955d-420a-9fbb-b265889c220f/image.jpg" alt="Lookbook" />
        </div>
      </div>
    </div>

  );
}

export default Lookbook;