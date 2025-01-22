import React from 'react';
import './Navbar.css';
import { NavLink } from "react-router-dom";
import sap from '../images/sap.png';

const Navbar = () => {
    const onChange = () => {
        const x = document.querySelector('.nav-items1');
        x.style.display = x.style.display === "none" ? "grid" : "none";
    };

    return (
        <>
        <div className="nav">
            <div className="navbar">
                <div className='nav-title'><h4>Elpis Learning Consultants LLP </h4></div>
                <div className='lalu'>
                    <span className='span' onClick={onChange}><i className="ri-menu-line"></i></span>
                    <div className="nav-items">
                        <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
                        <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
                        <NavLink to="/about" activeClassName="active-link">About</NavLink>
                    </div>
                </div>
            </div>
            <div className="nav-items1">
                <NavLink exact to="/" activeClassName="active-link" onClick={onChange}>Home</NavLink>
                <NavLink to="/contact" activeClassName="active-link" onClick={onChange}>Contact</NavLink>
                <NavLink to="/about" activeClassName="active-link" onClick={onChange}>About</NavLink>
            </div>

            <div className="nav-pic">
                <img src={sap} alt="" />
            </div>
        </div>
        </>
    )
}

export default Navbar;
