import React, { useState } from 'react';
import { useRef } from 'react';
import "./LoginScreen.css"
import RegisterScreen from './RegisterScreen'
import { auth } from '../../Firebase';

function LoginScreen() {

    const [signIn, setSignIn] = useState(false);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const signInUser = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert("Invalid Credentials");
        })
    };

    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <div className="loginScreen__gradient" />
            </div>
            <div className="loginScreen__body">

                {signIn ? (
                    <RegisterScreen />
                ) : (
                    <>
                        <div className="loginScreen__input" >
                            <form className="login__form">
                                <h1>Login to Shop</h1>
                                <input ref={emailRef} placeholder="Email" type="email" />
                                <input ref={passwordRef} placeholder="Password" type="password" />
                                <button type="submit" onClick={signInUser} >Login</button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default LoginScreen
