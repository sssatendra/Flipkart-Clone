import React, { useState } from 'react'
import { auth } from '../../Firebase';
import "./ForgotPassword.css"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { Backdrop } from '@material-ui/core';
import CircularIndeterminate from './Circular';

function ForgotPassword() {

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        setLoading(true);
        console.log(e);
        e.preventDefault();
        const config = {
            url: "https://flipkart-clone-1a222.web.app/login",
            handleCodeInApp: true
        }

        await auth.sendPasswordResetEmail(email, config)
            .then(() => {
                setEmail('');
                setLoading(false)
                toast.success(`Password reset Link sent to ${email}, Click the link to set new password`);
            }).catch((error) => {
                setLoading(false);
                console.log(error.message);
                toast.error(error.message)
            })
        // toast.success(`Password rest Link sent to ${email}, Click the link to set new password`);
        // // Save user email in local storageBucket
        // window.localStorage.setItem("emailForRegistration", email);
        // // clear state
        // setEmail("")
        // setLoading(false);
    }

    return (
        <div className="forgot__password">
            <div className="password__container">
                <h1>Reset Your Password here</h1>
                <form onSubmit={handleSubmit} >
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email Address" autoFocus />
                    {loading ? (<CircularIndeterminate />) : (<button type="submit" >Reset Password</button>)}
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ForgotPassword
