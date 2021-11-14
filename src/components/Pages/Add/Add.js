import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import * as S from './Add.styles';

const Add = () => {
  const [values, setValues] = useState();
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const postData = (e) => {
    fetch(`${process.env.REACT_APP_BASE_URL}v1/content/skills`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${authContext.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert('Succesfully addedd');
          return navigate('/', { replace: true });
        }
        return alert('Data is not correct');
      })
      .catch((err) => alert(err))
      .finally(() => e.target.reset());
  };

  return (
    <div>
      <S.FormWraper
        onSubmit={(e) => {
          e.preventDefault();
          postData(e);
        }}
      >
        <h1>Please enter skills below:</h1>
        <S.InputStyle
          type="text"
          placeholder="Title"
          onChange={(e) =>
            setValues({
              ...values,
              title: e.target.value,
            })
          }
          required
        />
        <S.TextareaStyle
          onChange={(e) =>
            setValues({
              ...values,
              description: e.target.value,
            })
          }
          placeholder="Description"
          rows="4"
          cols="50"
          required
        ></S.TextareaStyle>
        <S.ButtonStyle type="submit">Add</S.ButtonStyle>
      </S.FormWraper>
    </div>
  );
};

export default Add;
