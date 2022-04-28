import React from 'react';
import logo from "../Assets/images/logo.svg"
import "../Style/Footer.css"

function Footer(props) {
    return (
        <footer>
            <img src={logo} alt="logo" />
            <div className="footer-nav-first">
                <div className="footer-nav-header">
                    Product
                </div>
                <div className="overview">
                    Overview
                </div>
                <div className="pricing">
                    Pircing
                </div>
                <div className="marketplace">
                    Marketplace
                </div>
                <div className="footer-features">
                    Feature
                </div>
                <div className="footer-integrations">
                    Integrations
                </div>
            </div>
            <div className="footer-nav-second">
                <div className="footer-nav-header">
                    Company
                </div>
                <div className="about">
                    About
                </div>
                <div className="team">
                    Team
                </div>
                <div className="blog">
                    Blog
                </div>
                <div className="careers">
                    Careers
                </div>
            </div>
            <div className="footer-nav-third">
                <div className="footer-nav-header">
                    Connect
                </div>
                <div className="contact">
                    Contact
                </div>
                <div className="newsletter">
                    Newsletter
                </div>
                <div className="linkedin">
                    LinkedIn
                </div>
            </div>
            
        </footer>
    );
}

export default Footer;