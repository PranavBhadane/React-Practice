import React, { useState } from 'react';
import axios from 'axios';

function Login({ setPage, setUser }) {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/login', formData);
      if (response.data && response.data.name) {
        setUser(response.data);
        setPage('home');
      } else {
        alert('Invalid credentials!');
      }
    } catch (error) {
      alert('Login failed!');
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Welcome Back!</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p onClick={() => setPage('register')}>Don't have account? Register here</p>
      </div>
    </div>
  );
}

export default Login;
