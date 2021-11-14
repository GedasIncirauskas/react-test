import React from 'react';
import PropTypes from 'prop-types';
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

Form.propTypes = {
  setUserInputs: PropTypes.func,
  userInputs: PropTypes.objectOf(PropTypes.string),
  title: PropTypes.string,
  type: PropTypes.string,
  submit: PropTypes.func,
};

export default Form;
