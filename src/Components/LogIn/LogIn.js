import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './LogIn.css';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import auth from '../../Firebase.init';


const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
   
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/home";

    const handleMail = event => {
        setEmail(event.target.value);
    }
    const handlePass = event => {
        setPassword(event.target.value);
    }

    const logUser = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
             
                navigate(from, { replace: true });
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError('Incorrect password');
            });

    }
    const logbyGoogle = () =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                setError('Already have an account')
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    return (
        <div>
            <div className='form-containerss'>
                <div> 
                    <h1 className='titlesss ps-2'>Login</h1>
                    <form onSubmit={logUser}>
                        <div className='input-groupsss'>
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleMail} type="email" name='email' className='logg ps-2' id='' required />
                        </div>
                        <div className='input-groupsss pt-3 '>
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePass} type="password" name='password' className='logg ps-2' id='' required />
                        </div>
                        <p className='text-danger pt-2 fw-bolder'>{error ? error : ''}</p>
                        <input type="submit" value='Login' className='handleButton' />
                    </form>
                    <p className='neww pb-2'>New to Ema-jhon? <Link to='/signup' className='linkuu'>Create New Account</Link> </p>
                    <hr />
                  
                    <p className='text-center'>Or</p>
                    <button className='btuuu mb-5'> <FcGoogle className='fs-2'></FcGoogle><span className='btu-titu' onClick={logbyGoogle}>Continue With google</span> </button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;