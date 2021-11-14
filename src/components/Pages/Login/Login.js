import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import { Form } from '../../';

const Login = () => {
  const [userInputs, setUserInputs] = useState();
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const userLogin = () => {
    fetch(`${process.env.REACT_APP_BASE_URL}v1/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInputs),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.token) {
          authContext.setToken(data.token);
          alert(data.msg);
          return navigate('/', { replace: true });
        }
        return alert(data.err);
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <Form type="submit" title="Log in" userInputs={userInputs} setUserInputs={setUserInputs} submit={userLogin} />
    </div>
  );
};

export default Login;
