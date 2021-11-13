import React, { useState } from 'react';
import { Form } from '../../';

const Register = () => {
  const [userInputs, setUserInputs] = useState();

  const userRegister = () => {
    fetch(`${process.env.REACT_APP_BASE_URL}v1/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInputs),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert('Succesfully registered');
          setUserInputs('');
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div>
      <Form
        type="submit"
        title="Register"
        userInputs={userInputs}
        setUserInputs={setUserInputs}
        submit={userRegister}
      />
    </div>
  );
};

export default Register;
