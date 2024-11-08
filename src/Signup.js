import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';
import './App.css';

const Signup = () => {
    const { login } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const handleSignup = () => {
        if (name.trim() === "") {
            setError("Name is required.");
            return;
        }
        
        // Clear error and proceed with signup
        setError("");
        const newUser = { name };
        login(newUser); // Set user context on successful signup
    };

    return (
        <div className="auth-container">
            <h2>Signup</h2>
            {error && <p className="error-message">{error}</p>}
            <input 
                type="text" 
                placeholder="Enter your name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    );
};

export default Signup;
