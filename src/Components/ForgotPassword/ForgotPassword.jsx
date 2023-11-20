import React from 'react'
import { useState } from 'react';
import Header from '../Header/Header';
import { forgotPasswordApi } from '../Api/login';
import { useNavigate } from 'react-router-dom';
import "./ForgotPassword.css"

function ForgotPassword() {

    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleForgotPassword = async (e) => {
        e.preventDefault();
        console.log(email)
        try {
            const response = await forgotPasswordApi({ email })
            console.log(response)
            if (response.data === "Mail Sent") {
                console.log(response.data);
                setErrorMessage('Password-Reset link Sent to the Email');
                setEmail("")
            } else if (response.data === "User not found") {
                setErrorMessage('User not found');
            } else if (response.data === "Server Busy") {
                setErrorMessage("Server Busy")
            }

        } catch (error) {
            console.error('Error logging in:', error);
            setErrorMessage('Error logging in');
        }
    };



    return (
        <div className='ForgotPassword' >
            <Header />
            <div className="container">
                <div className="row justify-content-center mt-5 lh-lg">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">Enter email address and send mail for verify your account</div>
                            <div className="card-body">
                                {errorMessage && (
                                    <div className="alert alert-danger" role="alert">
                                        {errorMessage}
                                    </div>
                                )}
                                <form onSubmit={handleForgotPassword}>
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
                                    <button type="submit" className="btn btn-primary mt-3">Send Mail</button>
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

export default ForgotPassword