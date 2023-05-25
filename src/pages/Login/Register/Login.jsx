import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./autentikasi.css"

export const Login = (props) => {
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h1>Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@example.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Login</button>
            </form>
            <Link id="link-btn" to="/Register" className={location.pathname === "/Register" ? "active-link" : ""}>Create Account</Link>
        </div>
    )
}