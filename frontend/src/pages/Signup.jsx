import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserPlus } from 'lucide-react';
import api from '../api';

export default function Signup() {
  const [Username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const res = await api.post('/signup', { Username, email, password });
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="center-flex">
      <div className="glass-panel auth-card">
        <h1>Create Account</h1>
        <p className="subtitle">Start taking notes today</p>
        
        {error && <div className="glass-panel" style={{ padding: '10px', color: 'var(--danger)', marginBottom: '20px', textAlign: 'center', borderColor: 'var(--danger)' }}>{error}</div>}
        
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label>Username</label>
            <input 
              type="text" 
              className="form-control" 
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
              required 
              placeholder="Choose a username"
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              className="form-control" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              className="form-control" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              placeholder="Create a password"
            />
          </div>
          
          <button type="submit" className="btn" style={{ width: '100%', marginTop: '10px' }} disabled={loading}>
            <UserPlus size={18} />
            {loading ? 'Creating...' : 'Sign Up'}
          </button>
        </form>
        
        <p style={{ textAlign: 'center', marginTop: '20px', color: 'var(--text-secondary)' }}>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
