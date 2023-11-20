import React, { useEffect } from 'react'
import { useState } from 'react';
import Header from '../Header/Header';
import { loginApi } from '../Api/login';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import "./LoginPage.css"

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const [input] = useSearchParams();

    useEffect(() => {
        console.log(input.get('newuser'))
        if (input.get('newuser')) {
            alert('Account Activated')
        }
    }, [])

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(email, password)
        try {
            const response = await loginApi({ email, password })
            console.log(response)
            if (response.data.token) {
                localStorage.setItem("token", response.data.token)
                navigate('/home');
            } else {
                setErrorMessage(response.data);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setErrorMessage('Error logging in');
        }
    };



    return (
        <div className='LoginPage' >
            <Header />
            <div className="container">
                <div className="row justify-content-center mt-5 lh-lg">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header text-center text-bold fs-4">User Login</div>
                            <div className="card-body">
                                {errorMessage && (
                                    <div className="alert alert-danger" role="alert">
                                        {errorMessage}
                                    </div>
                                )}
                                <form onSubmit={handleLogin}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email ID</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            value={email}
                                            required
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            value={password}
                                            required
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-3">Login</button>
                                </form>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <div className='text-danger' role='button' onClick={() => navigate("/forgotpassword")}>ForgetPassword?</div>
                                <div className='text-success' role='button' onClick={() => navigate("/register")}>Register?</div>
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