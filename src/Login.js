import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';
import './App.css';

const Login = () => {
    const { login } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (name.trim() === "") {
            setError("Name is required.");
            return;
        }

        // Clear error and proceed with login
        setError("");
        const existingUser = { name };
        login(existingUser); // Set user context on successful login
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
            <input 
                type="text" 
                placeholder="Enter your name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <button onClick={handleLogin}>Log In</button>
        </div>
    );
};

export default Login;
