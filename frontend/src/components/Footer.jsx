import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>We are a company dedicated to providing the best service to our customers. Our team is committed to ensuring your satisfaction.</p>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <ul>
                        <li>Email: <a href="mailto:mailtilak321@rediffmail.com">mailtilak321@rediffmail.com</a></li>
                        <li>Helpline: <a href="tel:+91 86172 59790">+91 86172 59790</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <ul className="social-links">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
