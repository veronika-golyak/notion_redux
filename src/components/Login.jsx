import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions'; 

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const registeredUsers = useSelector((state) => state.auth.registeredUsers); 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const user = registeredUsers.find(user => user.email === email && user.password === password);
    
    if (user) {
      dispatch(login(user));
      navigate('/dashboard'); 
    } else {
      setError('Invalid credentials'); 
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="p-6 rounded w-full max-w-sm bg-white shadow">
        <h1 className="text-2xl mb-4 text-center">Login</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-4 w-full"
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-4 w-full"
          placeholder="Password"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Log In
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <Link to="/" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;