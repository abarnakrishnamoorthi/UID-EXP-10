import React, { useContext } from 'react';
import './App.css'; // Import the CSS file here
import { AuthContext } from './AuthContext';

const Logout = () => {
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    };

    return (
        <div className="auth-container">
            <div className="welcome">Welcome, User!</div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
