import React from 'react';
import { NavLink } from 'react-router-dom';
import {  FaHome, FaLocationArrow, FaPhone } from 'react-icons/fa';
import "./Footer.css"
const Footer = () => {
    return (
        <div className="p-5 footer">
            <div className="row">
                <div className="mt-3 col-lg-3 col-md-6 col-sm-12 col-12 text-start">
                    <h1 className="text-white">EXTRAS</h1>
                    <NavLink className="text-white NavLink "to="/home">Brands</NavLink>  <br />
                    <NavLink className="text-white NavLink"to="/home">Gift Certificates</NavLink> <br />
                    <NavLink className="text-white NavLink"to="/home">Affiliates</NavLink> <br />
                    <NavLink className="text-white NavLink"to="/home">Special</NavLink> <br />
                    <NavLink className="text-white NavLink"to="/home">Site Map</NavLink>
                </div>
                <div className="mt-3 col-lg-3 col-md-6 col-sm-12 col-12 text-start">
                <h1 className="text-white">INFORMATION</h1>
                    <NavLink className="text-white NavLink"to="/home">About Us</NavLink>  <br />
                    <NavLink className="text-white NavLink"to="/home">Privacy Policy</NavLink> <br />
                    <NavLink className="text-white NavLink"to="/home">Terms & Conditions</NavLink> <br />
                    <NavLink className="text-white NavLink"to="/home">Contact Us</NavLink> <br />
                    <NavLink className="text-white NavLink"to="/home">Site Map</NavLink>
                </div>
                <div className="mt-3 col-lg-3 col-md-6 col-sm-12 col-12 text-start">
                <h1 className="text-white">MY ACCOUNT</h1>
                    <NavLink className="text-white NavLink"to="/home">My Account</NavLink>  <br />
                    <NavLink className="text-white NavLink"to="/home">Order History </NavLink> <br />
                    <NavLink className="text-white NavLink"to="/home">Wish List</NavLink> <br />
                    <NavLink className="text-white NavLink"to="/home">News Letter</NavLink> <br />
                    <NavLink className="text-white NavLink"to="/home">Returns</NavLink>
                </div>
                <div className="mt-3 col-lg-3 col-md-6 col-sm-12 col-12 text-start">
                <h1 className="text-white">Contact Us</h1>
                    <NavLink className="text-white NavLink"to="/home"><FaHome />  43 Dream house,Dhaka-1208</NavLink>  <br />
                    <NavLink className="text-white NavLink"to="/home"><FaPhone/> +880-162742133</NavLink> <br />
                    <NavLink className="text-white NavLink"to="/home">imranbutex41@gmail.com</NavLink> <br />
                    <NavLink className="text-white NavLink"to="/home"> <FaLocationArrow/>Dream City Dhaka</NavLink> <br />
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;