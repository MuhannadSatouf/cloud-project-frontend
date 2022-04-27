import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="about">
        <p className="title">About us</p>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          <br />
          dolores laboriosam voluptatum alias, similique temporibus vel.
        </p>
      </div>
      <div className="contact-us-div">
        <p className="title">Contact Us</p>
        <p>EMAIL: mycirculation@mycirculation.com</p>
        <p>Tele: +46 00 000 00 00</p>
      </div>
      <div className="icon-footer">
        <h2 className="logo-footer">MyCirculation</h2>
      </div>
    </div>
  );
}

export default Footer;
