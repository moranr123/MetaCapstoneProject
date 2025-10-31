import React from "react";
import logo from "../images/Logo .svg";

function Footer() {  return (
  
    <footer>
      <section>
        <div className="company-info">
          <img src={logo} alt="Little Lemon Logo" />
          <p>We are family owned Mediterraneran Restuarant, focused on traditional recipes
          served with a modern twist.
          </p>
        </div>
        <div className="footer-links">
          <h3>Important Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>1234 Lemon St.</p>
          <p>Chicago, IL 60601</p>
          <p>(123) 456-7890</p>
        </div>

        <div className="social-media">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://www.facebook.com/littlelemon">Facebook</a></li>
            <li><a href="https://www.twitter.com/littlelemon">Twitter</a></li>
            <li><a href="https://www.instagram.com/littlelemon">Instagram</a></li>
          </ul>
        </div>

      </section>
    </footer>
  );
}

export default Footer;