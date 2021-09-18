import React, { useEffect, useState } from 'react';
import "./LoginScreen.css"
import { auth, googleAuthProvider } from '../../Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CircularIndeterminate from "./Circular";
import { Link } from 'react-router-dom';
// import axios from "axios";
import { createOrUpdateUser } from '../../functions/auth';




function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)

    const { user } = useSelector((state) => ({ ...state }));
    let dispatch = useDispatch();
    var history = useHistory();

    const roleBasedRedirect = (res) => {
        // var history = useHistory();
        if (res === "admin") {
            history.push('/admin/dashboard')
        } else {
            history.push('/user/history');
        }

    }

    useEffect(() => {
        if (user && user.token) history.push('/')
    }, [user]);

    const googleLogin = async (e) => {
        e.preventDefault();
        setLoading(true)
        console.log("Inside Google Login")
        auth.signInWithPopup(googleAuthProvider)
            .then(async (result) => {
                const { user } = result;
                const idTokenResult = await user.getIdTokenResult();
                createOrUpdateUser(idTokenResult.token)
                    .then((res) => {
                        dispatch({
                            type: "LOGGED_IN_USER",
                            payload: {
                                name: res.data.name,
                                email: res.data.email,
                                token: idTokenResult.token,
                                role: res.data.role,
                                _id: res.data._id,

                            }
                        });
                        // history.push('/');
                        roleBasedRedirect(res.data.role);
                    })
                    .catch(e => toast.error(e));
                // console.log(user.displayName);
                // history.push('/');
            })
            .catch((err) => {
                setLoading(false);
                toast.error(err.message);
                console.log(err.message);
            });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const result = await auth.signInWithEmailAndPassword(email, password);
            console.log(result);
            const { user } = result;
            const idTokenResult = await user.getIdTokenResult();
            createOrUpdateUser(idTokenResult.token)
                .then((res) => {
                    dispatch({
                        type: "LOGGED_IN_USER",
                        payload: {
                            name: res.data.name,
                            email: res.data.email,
                            token: idTokenResult.token,
                            role: res.data.role,
                            _id: res.data._id
                        }
                    });
                    roleBasedRedirect(res.data.role);
                })
                .catch(e => toast.error(e));

        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error(error.message);
        }
    }


    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <div className="loginScreen__gradient" />
            </div>
            <div className="loginScreen__body">
                <>
                    <div className="loginScreen__input" >
                        <form className="login__form">
                            <h1>Login to Shop</h1>

                            <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} type="email" autoFocus />
                            <input placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} type="password" />
                            {loading ? (<CircularIndeterminate />) : <button disabled={!email || password.length < 6} type="submit" onClick={handleSubmit} >Login</button>}
                            <button id='googlebtn' onClick={googleLogin}> Login with Google</button>
                            <Link to="/forgotPassword"> <p>Forgot Password?</p> </Link>
                        </form>
                    </div>
                </>
            </div>
            <ToastContainer />
        </div>
    )
}

export default LoginScreen

