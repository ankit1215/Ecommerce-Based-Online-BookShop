import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // In real app, you'd call backend API here.
        alert('Registered successfully!');
        navigate('/login');
    };

    return (
        <div className="auth-container">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
