import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { FcGoogle } from 'react-icons/fc';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../../Firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPd, setConfirmPd] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const mailBlur = event => {
        setEmail(event.target.value);
    }
    const passBlur = event => {
        setPassword(event.target.value);
    }
    const confoPdBlur = event => {
        setConfirmPd(event.target.value);
    }
    const createUser = event => {
        event.preventDefault();
        if (password !== confirmPd) {
            setError('Password did not match!')
            return;
        }
        if (password.length < 6) {
            setError('Password too shorts!')
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate('/home')
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError('Already have an account');
                // ..
            });
    }
    const createbyGoogle = () => {
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
                    <h1 className='titlesss'>Sign Up</h1>
                    <form onSubmit={createUser}>
                        <div className='input-groupsss'>
                            <label htmlFor="email">Email</label>
                            <input onBlur={mailBlur} type="email" name='email' className='logg ps-2' id='' required />
                        </div>
                        <div className='input-groupsss pt-3 '>
                            <label htmlFor="password">Password</label>
                            <input onBlur={passBlur} type="password" name='password' className='logg ps-2' id='' required />
                        </div>
                        <div className='input-groupsss pt-3 '>
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input onBlur={confoPdBlur} type="password" name='Confirm-password ps-2' className='logg' id='' required />
                        </div>
                        <p className='pt-2 text-danger fw-bolder'>{error ? error : ''}</p>
                        <input type="submit" value='Sign Up' className='handleButton' />
                        {/* <button className='handleButton' type='submit' value='sign up'><span className='logtitleee'>Sign up</span></button> */}
                    </form>
                    <p className='neww pb-2'>Already have an account? <Link to='/login' className='linkuu'>Login</Link> </p>
                    <hr />
                    <p className='text-center'>Or</p>
                    <button onClick={() => createbyGoogle()} className='btuuu mb-5'> <FcGoogle className='fs-2'></FcGoogle><span className='btu-titu'>Continue With google</span> </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;