import React, { useState } from 'react';
import axios from 'axios';

function Register({ setPage }) {
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', confirmPassword: ''
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8080/api/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
      alert(response.data);
      setPage('login');
    } catch (error) {
      alert('Registration failed!');
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Create Account</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            required
          />
          <button type="submit">Register</button>
        </form>
        <p onClick={() => setPage('login')}>Already have account? Login here</p>
      </div>
    </div>
  );
}

export default Register;
