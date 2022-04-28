import React, {useEffect, useState} from 'react';
import logo from "../Assets/images/logo.svg"
import arrow from "../Assets/images/icon-arrow-light.svg"
import "../Style/Navbar.css"
import burgerIcon from "../Assets/images/icon-hamburger.svg";
import closeIcon from "../Assets/images/icon-close.svg";

export default function Navbar(props) {

    const [isScrolling, setIsScrolling] = useState(false);
    
    const [menuOpen, setMenuOpen] = useState(false);

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
    
    function ToggleMenu() {
        setMenuOpen(!menuOpen)
    }
    
    
    
    return (
        <header className={`navbar ${isScrolling && 'scroll-nav'}`}>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <nav className="nav-links">
                <div className="product">
                    <span className="name">
                        Product
                    </span>
                    <img src={arrow} alt="arrow"/>
                </div>
                <div className="company">
                    <div className="name">
                        Company
                    </div>
                    <img src={arrow} alt="arrow"/>
                </div>
                <div className="connect">
                    <div className="name">
                        Connect
                    </div>
                    <img src={arrow} alt="arrow"/>
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
            <div className="toggle-menu" onClick={ToggleMenu}>
                <img src={menuOpen ? closeIcon : burgerIcon} alt="burger-icon" />
            </div>
        </header>
    );
}