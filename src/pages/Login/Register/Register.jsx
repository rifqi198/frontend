import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./autentikasi.css"

export const Register = (props) => {
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
                <h1>Register</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Username</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Username" />
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@example.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Register</button>
            </form>
            <Link id="link-btn" to="/Login" className={location.pathname === "/Login" ? "active-link" : ""}>Already have an account? Login here </Link>
        </div>
    )
}