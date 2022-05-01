import React, {useEffect, useRef, useState} from 'react';
import logo from "../Assets/images/logo.svg"
import arrow from "../Assets/images/icon-arrow-light.svg"
import "../Style/Navbar.css"
import MobileNavbar from "./MobileNavbar";

export default function Navbar(props) {

    const [isScrolling, setIsScrolling] = useState(false);
    
    const [desktopMenu, setDesktopMenu] = useState("");
    
    const productRef = useRef(null);
    
    const companyRef = useRef(null); 
    
    const connectRef = useRef(null);

    const listenScrollEvent = () => {
        if (window.scrollY >= 100) {
            setIsScrolling(true);
        } else {
            setIsScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        }
    }, []);

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (
                desktopMenu
                && productRef.current
                && companyRef.current
                && connectRef.current
                && !productRef.current.contains(e.target)
                && !companyRef.current.contains(e.target)
                && !connectRef.current.contains(e.target)) {
                setDesktopMenu("");
            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [desktopMenu]);
    
    return (
        <header className={`navbar ${isScrolling && 'scroll-nav'}`}>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <nav className="nav-links">
                <div className="product" ref={productRef} onClick={() => setDesktopMenu('product')}>
                    <div className='product-container'>
                        <span className="name">
                            Product
                        </span>
                        <img src={arrow} className={desktopMenu === 'product' && 'rotate-arrow'} alt="arrow"/>
                    </div>
                    <div className={`link-menu ${desktopMenu === 'product'
                        ? 'link-menu-active' : 'link-menu-inactive' }`}>
                        <div className="menu-element">
                            Overview
                        </div>
                        <div className="menu-element">
                            Pircing
                        </div>
                        <div className="menu-element">
                            Marketplace
                        </div>
                        <div className="menu-element">
                            Feature
                        </div>
                        <div className="menu-element">
                            Integrations
                        </div>
                    </div>
                </div>
                <div className="company" ref={companyRef} onClick={() => setDesktopMenu('company')}>
                    <div className="company-container">
                        <div className="name">
                            Company
                        </div>
                        <img src={arrow} className={desktopMenu === 'company' && 'rotate-arrow'} alt="arrow"/>
                    </div>
                    <div className={`link-menu ${desktopMenu === 'company'
                        ? 'link-menu-active' : 'link-menu-inactive' }`}>
                        <div className="menu-element">
                            About
                        </div>
                        <div className="menu-element">
                            Team
                        </div>
                        <div className="menu-element">
                            Blog
                        </div>
                        <div className="menu-element">
                            Careers
                        </div>
                    </div>
                </div>
                <div className="connect" ref={connectRef} onClick={() => setDesktopMenu('connect')}>
                    <div className="connect-container">
                        <div className="name">
                            Connect
                        </div>
                        <img src={arrow} className={desktopMenu === 'connect' && 'rotate-arrow'} alt="arrow"/>
                    </div>
                    <div className={`link-menu ${desktopMenu === 'connect'
                        ? 'link-menu-active' : 'link-menu-inactive' }`}>
                        <div className="menu-element">
                            Contact
                        </div>
                        <div className="menu-element">
                            Newsletter
                        </div>
                        <div className="menu-element">
                            LinkedIn
                        </div>
                    </div>
                </div>
            </nav>
            <div className="register-container">
                <div className="login">
                    Login
                </div>
                <div className="sign-up">
                    Sign Up
                </div>
            </div>
            <MobileNavbar />
        </header>
    );
}