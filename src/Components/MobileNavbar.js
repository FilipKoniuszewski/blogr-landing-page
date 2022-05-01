import React, {useEffect, useRef, useState} from 'react';
import closeIcon from "../Assets/images/icon-close.svg";
import burgerIcon from "../Assets/images/icon-hamburger.svg";
import arrowMobile from "../Assets/images/icon-arrow-dark.svg";

function MobileNavbar(props) {

    const [mobileExpandedSection, setMobileExpandedSection] = useState("")

    const [mobileMenu, setMobileMenu] = useState(false);

    const mobileMenuRef = useRef(null);

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (
                mobileMenu
                && mobileMenuRef.current
                && !mobileMenuRef.current.contains(e.target)) {
                setMobileMenu(false);
                setMobileExpandedSection("")

            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [mobileMenu]);
    
    function expandMobileMenu() {
        setMobileMenu(!mobileMenu)
        setMobileExpandedSection("")
        
    }
    
    return (
        <div className="toggle-menu" ref={mobileMenuRef}>
            <img src={mobileMenu ? closeIcon : burgerIcon} alt="burger-icon" onClick={expandMobileMenu}/>
            <div className={`mobile-menu-container ${mobileMenu ? 'mobile-menu-container-active' : 'mobile-menu-container-inactive'}`}>
                <div className="mobile-menu-section" onClick={() => setMobileExpandedSection('product')}> 
                    <div className={`mobile-section-header ${mobileExpandedSection === 'product' && 'active-header'}`}>
                        <span> Product </span>
                        <img src={arrowMobile} className={mobileExpandedSection === 'product' && 'rotate-arrow'} alt="arrow"/>
                    </div>
                    <div className={`mobile-expanded ${mobileExpandedSection === 'product' 
                        ? 'mobile-expanded-active' 
                        : 'mobile-expanded-inactive'}`}>
                        <a href="#">Overview</a>
                        <a href="#">Pricing</a>
                        <a href="#">Marketplace</a>
                        <a href="#">Features</a>
                        <a href="#">Integrations</a>
                    </div>
                </div>
                <div className="mobile-menu-section" onClick={() => setMobileExpandedSection('company')}>
                    <div className={`mobile-section-header ${mobileExpandedSection === 'company' && 'active-header'}`}>
                        <span> Company </span>
                        <img src={arrowMobile} className={mobileExpandedSection === 'company' && 'rotate-arrow'} alt="arrow"/>
                    </div>
                    <div className={`mobile-expanded ${mobileExpandedSection === 'company'
                        ? 'mobile-expanded-active'
                        : 'mobile-expanded-inactive'}`}>
                        <a href="#">About</a>
                        <a href="#">Team</a>
                        <a href="#">Blog</a>
                        <a href="#">Careers</a>
                    </div>
                </div>
                <div className="mobile-menu-section" onClick={() => setMobileExpandedSection('connect')}>
                    <div className={`mobile-section-header ${mobileExpandedSection === 'connect' && 'active-header'}`}>
                        <span>Connect</span>
                        <img src={arrowMobile} className={mobileExpandedSection === 'connect' && 'rotate-arrow'} alt="arrow"/>
                    </div>
                    <div className={`mobile-expanded ${mobileExpandedSection === 'connect'
                        ? 'mobile-expanded-active'
                        : 'mobile-expanded-inactive'}`}>
                        <a href="#">Contact</a>
                        <a href="#">Newsletter</a>
                        <a href="#">LinkedIn</a>
                    </div>
                </div>
                <hr className="separator" />
                <a href='#' className="mobile-toggle-login">Login</a>
                <button className="mobile-toggle-sign-up">
                    Sign up
                </button>

            </div>
        </div>
    );
}

export default MobileNavbar;