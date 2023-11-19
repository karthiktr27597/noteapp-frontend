import React from 'react'
import { useState } from 'react';
import Header from '../Header/Header';
import './Register.css';

function RegisterPage() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.target.value()
  }

  return (
    <div className='RegisterPage' >
      <Header />
      <div className="container">
        <div className="row justify-content-center mt-5 lh-lg">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">User Register</div>
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
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
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
                  <button type="submit" className="btn btn-primary mt-3">Register</button>
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

export default RegisterPage