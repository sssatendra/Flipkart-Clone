import React from 'react'
import { Route, Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import LoadingRedirect from "./LoadingRedirect"
import "./Redirect.css"

function UserRoute({ children, ...rest }) {
    const { user } = useSelector((state) => ({ ...state }));
    return user && user.token ? (
        <Route {...rest} render={() => children} />

    ) : (
        <div className="route__container">
            <div className="inner__container">
                <h1>UnAuthorized User</h1>
                <LoadingRedirect />
            </div>
        </div>
    )
}

export default UserRoute
