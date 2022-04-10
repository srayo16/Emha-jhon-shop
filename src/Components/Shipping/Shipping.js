import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import './Shipping.css';
const Shipping = () => {
    const [user] = useAuthState(auth);
    // const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const nameBlur = event => {
        setName(event.target.value);
    }
    const addressBlur = event => {
        setAddress(event.target.value);
    }
    const phonNumberBlur = event => {
        setPhone(event.target.value);
    }
   
    const submitShippingInfo = event => {
        event.preventDefault();
        
    }
    return (
        <div>
        <div className='form-containerss'>
            <div>
                <h1 className='titleShip'>Shipping Information</h1>
                <form onSubmit={submitShippingInfo}>
                    <div className='input-groupsss'>
                        <label htmlFor="Your-name">Your Name</label>
                        <input onBlur={nameBlur} type="text" name='name' className='logg ps-2' id='' required />
                    </div>
                    <div className='input-groupsss pt-4'>
                        <label htmlFor="Your-email">Your Email</label>
                        <input value={user?.email} readOnly type="email" name='email' className='logg ps-2 text-muted' id='' required />
                    </div>
                    <div className='input-groupsss pt-3 '>
                        <label htmlFor="address">Your Address</label>
                        <input onBlur={addressBlur} type="text" name='address' className='logg ps-2' id='' required />
                    </div>
                    <div className='input-groupsss pt-3 '>
                        <label htmlFor="phone-number">Phone Number</label>
                        <input onBlur={phonNumberBlur} type="text" name='phone-number' className='logg ps-2' id='' required />
                    </div>
                    <p className='pt-2 text-danger fw-bolder'>{error ? error : ''}</p>
                    <input type="submit" value='Submit' className='handleButton mb-5' />
                </form>
               
            </div>
        </div>
    </div>
    );
};

export default Shipping;