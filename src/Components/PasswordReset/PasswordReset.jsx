import React from 'react';
import { useState } from 'react';
import "./PasswordReset.css";


function PasswordReset() {

    const [confirmPassword, setconfirmPassword] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

    };


    return (
        <div className='pwtresetPage' >
            <Header />
            <div className="container">
                <div className="row justify-content-center mt-5 lh-lg">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">Password Reset</div>
                            <div className="card-body">
                                {errorMessage && (
                                    <div className="alert alert-danger" role="alert">
                                        {errorMessage}
                                    </div>
                                )}
                                {/* <form onSubmit={handleLogin}>
                                    <div className="form-group">
                                        <label htmlFor="username">Password</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            value={password}
                                            onChange={(e) => setconfirmPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirmpassword">Confirm Password</label>
                                        <input
                                            type="confirmpassword"
                                            className="form-control"
                                            id="confirmpassword"
                                            value={confirmPassword}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-3">Login</button>
                                </form> */}
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

export default PasswordReset