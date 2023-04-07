import React, { Component, useEffect, useState } from 'react';
import './Nav.css'

function Nav() {
    const netflixLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png";
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && 'nav-black'}`}>
            <div className="nav-contents">
                <img className="nav-logo" 
                    src={netflixLogo}
                    alt="Netflix logo" 
                />
                <img className="nav-avatar" 
                    src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/gdruy0cnkgnaadpxiadi" 
                    alt="Avatar" 
                />
            </div>
        </div>
    );
}

export default Nav;