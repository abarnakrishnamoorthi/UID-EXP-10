import React from 'react';
import './App.css'; // Import the CSS file here
import { AuthProvider, AuthContext } from './AuthContext';
import Signup from './Signup';
import Login from './Login';
import Logout from './Logout';

function App() {
    return (
        <AuthProvider>
            <div>
                <h1>Authentication System</h1>
                {/* Conditionally render Signup, Login, or Logout */}
                <AuthContext.Consumer>
                    {({ user }) => (
                        <>
                            {!user ? (
                                <>
                                    <Signup />
                                    <Login />
                                </>
                            ) : (
                                <Logout />
                            )}
                        </>
                    )}
                </AuthContext.Consumer>
            </div>
        </AuthProvider>
    );
}

export default App;
