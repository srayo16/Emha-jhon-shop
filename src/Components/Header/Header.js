import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (



        <nav className='navu overflow-hidden'>
            <div>
            <img className='image-fluid imu' src= {logo} alt="/"  />
            </div>
            
           <div className='alu'>
           <Link to="/">Shop</Link>
            <Link to="/order">Orders</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/about">About us</Link>
            <Link to='/login'>Log In</Link>
           </div>
            
        </nav>
    );
};


export default Header;