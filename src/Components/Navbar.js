import React, {useEffect, useRef, useState} from 'react';
import logo from "../Assets/images/logo.svg"
import arrow from "../Assets/images/icon-arrow-light.svg"
import "../Style/Navbar.css"
import burgerIcon from "../Assets/images/icon-hamburger.svg";
import closeIcon from "../Assets/images/icon-close.svg";
import arrowMobile from "../Assets/images/icon-arrow-dark.svg";

export default function Navbar(props) {

    const [isScrolling, setIsScrolling] = useState(false);
    
    const [desktopMenu, setDesktopMenu] = useState("");

    const [mobileMenu, setMobileMenu] = useState(false);
    
    const productRef = useRef(null);
    
    const companyRef = useRef(null); 
    
    const connectRef = useRef(null);
    
    const mobileMenuRef = useRef(null);

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
                setMobileMenu(false);
            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [desktopMenu]);

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (
                mobileMenu
                && mobileMenuRef.current
                && !mobileMenuRef.current.contains(e.target)) {
                setMobileMenu(false);
            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [mobileMenu]);
    
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
            <div className="toggle-menu">
                <img src={mobileMenu ? closeIcon : burgerIcon} alt="burger-icon" onClick={() => setMobileMenu(!mobileMenu)}/>
                <div ref={mobileMenuRef} className={`mobile-menu-container ${mobileMenu ? 'mobile-menu-container-active' : 'mobile-menu-container-inactive'}`}>
                    <div className="mobile-menu-section">
                        <div className="mobile-section-header">
                            <span> Product </span>
                            <img src={arrowMobile} className={desktopMenu === 'product' && 'rotate-arrow'} alt="arrow"/>
                        </div>
                    </div>
                    <div className="mobile-menu-section"> 
                        <div className="mobile-section-header">
                            <span> Company </span>
                            <img src={arrowMobile} className={desktopMenu === 'company' && 'rotate-arrow'} alt="arrow"/>
                        </div>
                    </div>
                    <div className="mobile-menu-section">
                        <div className="mobile-section-header">
                            <span>Connect</span>
                            <img src={arrowMobile} className={desktopMenu === 'connect' && 'rotate-arrow'} alt="arrow"/>
                        </div>
                    </div>
                    <hr className="separator" />
                    <div className="mobile-toggle-login">
                        Login
                    </div>
                    <div className="mobile-toggle-sign-up">
                        Sign up
                    </div>
                
                </div>
            </div>
            
        </header>
    );
}