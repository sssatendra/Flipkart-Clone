import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../Firebase';
import "./RegisterScreen.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { Zoom } from "react-toastify";
// import RegisterComplete from "./RegisterComplete"
import CircularIndeterminate from "./Circular";
import { useSelector } from 'react-redux';

function RegisterScreen() {

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const { user } = useSelector((state) => ({ ...state }));
    const history = useHistory();

    useEffect(() => {
        if (user && user.token) history.pushState('/')
    }, [user]);

    const handleSubmit = async (e) => {
        setLoading(true);
        console.log(e);
        e.preventDefault();
        const config = {
            url: "https://flipkart-clone-1a222.web.app/register/complete",
            handleCodeInApp: true
        }

        await auth.sendSignInLinkToEmail(email, config)
        toast.success(`Registration Link sent to ${email}, Click the link to complete your registration`);

        // Save user email in local storageBucket

        window.localStorage.setItem("emailForRegistration", email);

        // clear state

        setEmail("")
        setLoading(false);
    }

    return (
        <div className="container">
            <div className="loginScreen__background">
                <div className="loginScreen__gradient" />
            </div>
            <div className="SignupScreen">
                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} autoFocus />
                    {loading ? (<CircularIndeterminate />) : (<button type="submit" > Register</button>)}
                    <h4><span className="signupScreen__gray"> Existing user? </span> <Link to="/login" ><span className="signupScreen__link" > Login.</span></Link>  </h4>
                </form>
            </div>
            <ToastContainer
                position="top-right"
                transition={Zoom}
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>

    )
}

export default RegisterScreen

