import React, { useContext } from 'react';
import { AuthContext } from '../contexts/auth';
import { Link } from 'react-router-dom';
import * as S from './Navigation.styles';

const Navigation = () => {
  const authContext = useContext(AuthContext);
  return (
    <S.Container>
      <S.LeftNavStyle>
        <S.ImageStyle
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Google_logo_%282010-2013%29.svg/2560px-Google_logo_%282010-2013%29.svg.png"
          alt="Logo"
        />

        <Link to="/">Home</Link>
      </S.LeftNavStyle>
      <S.Wrapper>
        {authContext.token ? <Link to="/add">Add</Link> : <Link to="/register">Register</Link>}
        {authContext.token ? '' : <Link to="/login">LogIn</Link>}
      </S.Wrapper>
    </S.Container>
  );
};

export default Navigation;
