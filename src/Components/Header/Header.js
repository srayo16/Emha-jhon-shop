import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (



        <nav className='navu overflow-hidden'>
            <div>
            <img className='image-fluid imu' src= {logo} alt="" />
            </div>
            
           <div className='alu'>
           <a href="">Order</a>
            <a href="">Order Review</a>
            <a href="">Manage Inventory</a>
            <a href="">About us</a>
           </div>
            
        </nav>
    );
};


export default Header;