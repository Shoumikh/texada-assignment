import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__col'>
          <h2>Texada</h2>
          <p>
            A car rental company that offers
            <br /> cars all over the country. <br /> Book your car today to enjoy a first class riding experience.
          </p>
        </div>
        <div className='footer__col'>
          <h3>Quick Links</h3>
          <p>About</p>
          <p>Offers & Discounts</p>
          <p>Get Coupon</p>
          <p>Conatact Us</p>
        </div>
        <div className='footer__col'>
          <h3>New Products</h3>
          <p>Women Cloth</p>
          <p>Fahion Accessories </p>
          <p>Man Acceessories</p>
          <p>Rubber Made Toys</p>
        </div>
        <div className='footer__col'>
          <h3>Support</h3>
          <p>Frequently Asked Questions</p>
          <p>Terms and Conditons</p>
          <p>Provacy Policy</p>
          <p>Report and payment issue</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
