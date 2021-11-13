import React from 'react';
import * as S from './Form.styles';

const Form = ({ setUserInputs, userInputs, title, type, submit }) => {
  return (
    <S.FormContainer
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <h1>{title} here</h1>
      <S.InputStyle
        type="email"
        placeholder="Email"
        onChange={(e) =>
          setUserInputs({
            ...userInputs,
            email: e.target.value.trim().toLowerCase(),
          })
        }
        required
      />
      <S.InputStyle
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setUserInputs({
            ...userInputs,
            password: e.target.value,
          })
        }
        required
      />
      <S.ButtonStyle type={type || 'submit'}>{title}</S.ButtonStyle>
    </S.FormContainer>
  );
};

export default Form;
