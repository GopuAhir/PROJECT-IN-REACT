import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './styles.css';
import './Login.css';

function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
          console.log(username,password,"kk");
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username:username,
        password: password,
      }),
    });

    // console.log(await response.json());

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      navigate('/');
    } else {
      const errorData = await response.json();
      setError(errorData.message);
    }
  };


  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          User Name:
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {error && <p>{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


export default Login;
