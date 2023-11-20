import React from 'react'
import { useState } from 'react';
import Header from '../Header/Header';
import './Register.css';
import { registerApi } from '../Api/login';
import { useNavigate } from 'react-router-dom';


function RegisterPage() {

  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('');
  const navigate = useNavigate()


  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      const response = await registerApi({ fullname, email, password })
      console.log(response)
      if (response.data === "Mail Sent") {
        setMessage("Activation link Sent to Email");
        alert("Please check you email for account activation")
      } else if (response.data === 'User already Registered') {
        setMessage("User already Registered");
      } else if (response.data === "Server Busy") {
        setMessage("Server Busy");
      }

      setFullname('')
      setEmail('')
      setPassword('')

    } catch (error) {
      console.error('Error logging in:', error);
      setMessage('Error logging in');
    }
  }

  return (
    <div className='RegisterPage' >
      <Header />
      <div className="container">
        <div className="row justify-content-center mt-5 lh-lg">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header text-center fs-4">User Register</div>
              <div className="card-body">
                {message && (
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                )}
                <form onSubmit={handleRegister}>
                  <div className="form-group">
                    <label htmlFor="fullname">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullname"
                      value={fullname}
                      required
                      onChange={(e) => setFullname(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
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
                  <button type="submit" className="btn btn-primary mt-3">Register</button>
                </form>
              </div>

            </div>
            <div className='text-success text-end cursor-pointer' role='button' onClick={() => navigate("/login")}>Login?</div>
          </div>
        </div>
      </div>
      <footer className="bg-light text-center py-3 footer">
        <p>&copy; {new Date().getFullYear()} NoteApp. Developed By Karthik T R</p>
      </footer>
    </div>

  )
}

export default RegisterPage