import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = ({}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/home');
    }
  }, []);

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const [errMsg, setErrMsg] = useState('');

  const login = () => {
    const URL = 'http://localhost:8080/api/authentication/login';
    axios
      .post(URL, loginData)
      .then((res) => {
        console.log(res);
        if (res.data.data) {
          setErrMsg(res.data.message + ' ' + res.data.data);
        } else {
          // debugger;
          setErrMsg(res.data.message + ' ' + 'redirection to home page...');
          setTimeout(() => {
            navigate('/home');
          }, 2000);
          // localStorage.setItem({ token: res.data.token });
          localStorage.setItem('token', res.data.token);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div class="container">
        <h1>This is Login page</h1>

        <div class="mb-3">
          <label class="form-label">Username</label>
          <input
            onChange={handleChange}
            name="username"
            type="text"
            class="form-control"
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Password</label>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            class="form-control"
          />
        </div>
        <div class="form-text text-danger">{errMsg}</div>
        <button onClick={login} type="click" class="btn btn-primary">
          Login
        </button>
      </div>
    </>
  );
};
export default Login;
