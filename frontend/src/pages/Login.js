import React, { useState } from 'react';
import './Login.css';
import styles from './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const history = useHistory();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement your login logic here
    if (username === '21BAI1102' && password === 'admin') {
      // Redirect to the welcome page upon successful login
      // alert("Logged in");
      navigate('/leaveapplication');
    }
    else if(username == "proctor" || password == "admin"){
      navigate('/leaveapproval');
    }
    else if(username == "" || password == ""){
      alert("Not entered either username or password");
    }
    else{
      alert("incorrect id or password");
    }
  };

  return (
    <div className="login-container">
        
      <div className="login-box">
        <h2>Login</h2>
        <h3>Your one stop destination for leave requests and outing permissions.</h3>
        <input
          className="custom-input-username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="custom-input-password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Log In</button>
      </div>
    </div>
  );
};

function LoginScreen(){
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default LoginScreen;
