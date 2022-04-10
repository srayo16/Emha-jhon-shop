import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';
import { FcGoogle } from 'react-icons/fc';

const LogIn = () => {
    return (
        <div>
            <div className='form-containerss'>
                <div>
                    <h1 className='titless'>Login</h1>
                    <form>
                        <div className='input-groupsss'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' className='logg' id='' />
                        </div>
                        <div className='input-groupsss pt-3 '>
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' className='logg' id='' />
                        </div>
                        <button className='handleButton'><span className='logtitleee'>Login</span></button>
                    </form>
                    <p className='neww pb-2'>New to Ema-jhon? <Link to='/signup' className='linkuu'>Create New Account</Link> </p>
                   <hr />
                   <p className='text-center'>Or</p>
                   <button className='btuuu'> <FcGoogle className='fs-2'></FcGoogle><span className='btu-titu'>Continue With google</span> </button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;