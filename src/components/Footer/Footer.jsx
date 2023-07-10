import React from "react";

const Footer = () => {
  return (

    <footer className="footer p-10 bg-black text-white mt-10">
  <div>
    <p><span className="text-xl">Raojan Groceries Ltd.</span><br/><br/>Providing reliable groceries Shop</p>
    {/* <hr className="bg-pink-600 w-1/2 my-2" /> Half-colored pink hr tag */}
  </div> 
  <div>
    <span className="footer-title">Quick Links</span> 
    <a className="link link-hover">About Us</a> 
    <a className="link link-hover">Shop Now!</a> 
    <a className="link link-hover">Cart</a> 
    {/* <hr className="bg-pink-600 w-1/2 my-2" /> Half-colored pink hr tag */}
  </div> 
  <div>
    <span className="footer-title">Support Links</span> 
    <a className="link link-hover">Signup</a> 
    <a className="link link-hover">Login</a> 
    <a className="link link-hover">Home</a> 
    {/* <hr className="bg-pink-600 w-1/2 my-2" /> Half-colored pink hr tag */}
  </div> 
  <div>
    <span className="footer-title">Contact Info</span> 
    {/* <hr className="bg-pink-600 w-1/2" /> Half-colored pink hr tag */}
    <a className="link link-hover">Wonder Street, USA, New York</a> 
    <a className="link link-hover">+01 321 654 214</a> 
    <a className="link link-hover">hello@shoponix.com</a>
   
  </div>
</footer>

  
  );
};

export default Footer;
