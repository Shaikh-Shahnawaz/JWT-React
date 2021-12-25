import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/home');
    }
  }, []);

  const [input, setInput] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const [errMsg, setErrMsg] = useState('');
  const signUp = () => {
    const URL = 'http://localhost:8080/api/authentication/signup';
    axios
      .post(URL, input)
      .then((res) => {
        console.log(res);
        setErrMsg(res.data.message);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div class="container">
      <h1>This is Signup page</h1>

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
        <label class="form-label">Full Name</label>
        <input
          onChange={handleChange}
          name="name"
          type="text"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input
          onChange={handleChange}
          name="email"
          type="email"
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
      <button onClick={signUp} type="submit" class="btn btn-primary">
        Signup
      </button>
    </div>
  );
};
export default Signup;
