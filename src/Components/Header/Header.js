import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {
    const handleLogout = () =>{
        signOut(auth).then(() => {
            
            console.log('Success')
          }).catch((error) => {
          
            console.error(error);
          });
    }
    const [user] = useAuthState(auth);


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
            {
                user?.uid ? <button onClick={handleLogout} className="logOutbtn">Log Out</button> : <Link to='/login'>Log In</Link>
            }
            
           
           </div>
            
        </nav>
    );
};


export default Header;