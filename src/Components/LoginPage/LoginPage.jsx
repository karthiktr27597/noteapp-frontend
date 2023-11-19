import React from 'react'
import { useState } from 'react';
import "./LoginPage.css"
import Header from '../Header/Header';

function LoginPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        // try {
        //     const response = await login({ username, password })
        //     if (response.data.token) {
        //         localStorage.setItem("token", response.data.token)
        //         Navigate('/landingpage');
        //     } else {
        //         setErrorMessage('Invalid username or password');
        //     }
        // } catch (error) {
        //     console.error('Error logging in:', error);
        //     setErrorMessage('Error logging in');
        // }
    };



    return (
        <div className='LoginPage' >
            <Header />
            <div className="container">
                <div className="row justify-content-center mt-5 lh-lg">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">User Login</div>
                            <div className="card-body">
                                {errorMessage && (
                                    <div className="alert alert-danger" role="alert">
                                        {errorMessage}
                                    </div>
                                )}
                                <form onSubmit={handleLogin}>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-3">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-light text-center py-3 footer">
                <p>&copy; {new Date().getFullYear()} NoteApp. Developed By Karthik T R</p>
            </footer>
        </div>
    )
}

export default LoginPage