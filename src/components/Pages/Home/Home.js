import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from '../../index';
import { AuthContext } from '../../contexts/auth';
import * as S from './Home.styles';

const Home = () => {
  const authContext = useContext(AuthContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}v1/content/skills`, {
      headers: {
        authorization: `Bearer ${authContext.token}`,
      },
    })
      .then((res) => res.json())
      .then((items) => {
        if (items || authContext.token) {
          setItems(items);
        }
        return;
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <S.GridContainer>
      {!authContext.token && <h1>You need log in</h1>}
      {items.length > 0 ? (
        items.map((element) => (
          <S.CardStyle key={element.id}>
            <h2 key={element.id}>{element.title}</h2>
            <p>{element.description}</p>
          </S.CardStyle>
        ))
      ) : (
        <Spinner />
      )}
    </S.GridContainer>
  );
};

export default Home;
