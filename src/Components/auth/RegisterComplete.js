import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase';
import "./RegisterScreen.css"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { useDispatch, useSelector } from 'react-redux';
import CircularIndeterminate from './Circular';
// import axios from "axios";
import { createOrUpdateUser } from '../../functions/auth';

// const createOrUpdateUser = async (authtoken) => {
//     return await axios.post(`${process.env.REACT_APP_API}/create-or-update-user`, {}, {
//         headers: {
//             authtoken,
//         }
//     })
// }

function RegisterComplete() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [cnfPassword, setCnfPassword] = useState('');
    const [loading, setLoading] = useState(false);

    // const { user } = useSelector((state) => ({ ...state }));
    let dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        setEmail(window.localStorage.getItem("emailForRegistration"));
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== cnfPassword) {
            toast.error("Password Mismatch, Please make sure you enter the correct password in both the fields")
            return;
        }

        if (!email || !password) {
            toast.error("Email and password is Required")
            return null;
        }

        if (password.length <= 8) {
            toast.error("Password must be more than 8 Character long");
            return null
        }

        try {
            setLoading(true);
            const result = await auth.signInWithEmailLink(email, window.location.href)
            if (result.user.emailVerified) {
                // remove the Email from local storage
                window.localStorage.removeItem("emailForRegistration");
                // get user id token
                let user = auth.currentUser;
                await user.updatePassword(password);
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
                        history.push('/');
                    })
                    .catch(e => toast.error(e));
                // console.log(user.displayName);
                // redirect after login
                history.push('/');
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error(error.message);
        }

    }

    return (
        <div className="container">
            <div className="loginScreen__background">
                <div className="loginScreen__gradient" />
            </div>
            <div className="SignupScreen">
                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <input disabled placeholder="Email" type="email" value={email} />
                    <input type="password" value={password} placeholder="New Password" onChange={e => setPassword(e.target.value)} autoFocus />
                    <input type="password" value={cnfPassword} placeholder="Confirm New Password" onChange={e => setCnfPassword(e.target.value)} />
                    {loading ? (<CircularIndeterminate />) : (<button type="submit" > Complete Registration</button>)}
                    <h4><span className="signupScreen__gray"> Existing user? </span> <Link to="/login" ><span className="signupScreen__link" > Login.</span></Link>  </h4>
                </form>
            </div>
            <ToastContainer />
        </div >
    )
}

export default RegisterComplete
