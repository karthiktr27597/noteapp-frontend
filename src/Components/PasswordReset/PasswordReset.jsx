import React from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import "./PasswordReset.css";
import { passwordResetApi } from '../Api/login';
import { useNavigate, useParams } from 'react-router-dom';

function PasswordReset() {

    const [confirmPassword, setconfirmPassword] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { id } = useParams();
    const navigate = useNavigate()


    const handlePasswordReset = async (e) => {
        try {
            e.preventDefault();
            console.log(id)
            if (!id) {
                setErrorMessage('Error found or incorrect entry')
                return
            }
            const response = await passwordResetApi({ password, confirmPassword, id })
            if (response.data === "Password Updated") {
                navigate("/home")
            } else if (response.data === "Password Mismatched") {
                setErrorMessage('Password Mismatched')
            } else if (response.data === "User not found") {
                setErrorMessage(response.data === "User not found")
            }
            else if (response.data === 'Server Busy') {
                setErrorMessage('Server Busy')
            }


        } catch (error) {
            console.error('Error logging in:', error);
            setErrorMessage('Error logging in');
        }
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
                                <form onSubmit={handlePasswordReset}>
                                    <div className="form-group">
                                        <label htmlFor="password">New Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            value={password}
                                            required
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirmpassword">Confirm Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="confirmpassword"
                                            value={confirmPassword}
                                            required
                                            onChange={(e) => setconfirmPassword(e.target.value)}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-3">Update And Login</button>
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

export default PasswordReset