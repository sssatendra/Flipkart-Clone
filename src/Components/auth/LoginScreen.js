import React, { useState } from 'react';
import "./LoginScreen.css"
import { auth } from '../../Firebase';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CircularIndeterminate from "./Circular";
import { Link } from 'react-router-dom';


function LoginScreen() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)

    let dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const result = await auth.signInWithEmailAndPassword(email, password);
            console.log(result);
            const { user } = result;
            const idTokenResult = await user.getIdTokenResult()
            dispatch({
                type: "LOGGED_IN_USER",
                payload: {
                    email: user.email,
                    token: idTokenResult.token,
                }
            });
            history.push('/');
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
                            <Link to="/forgotPassword"> <p>Forgot Password?</p> </Link>
                            <ToastContainer />
                        </form>
                    </div>
                </>
            </div>
        </div>
    )
}

export default LoginScreen
