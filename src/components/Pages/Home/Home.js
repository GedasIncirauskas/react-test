import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import * as S from './Home.styles';

const Home = () => {
  const authContext = useContext(AuthContext);
  //   const [items, setItems] = useState([]);

  const items = [
    { id: 1, title: 'Testas', description: 'Teastdatsdatsdtasd atsdtasdt' },
    { id: 2, title: 'Testas2', description: 'addddasd atsdtasdt' },
    { id: 3, title: 'Testas3', description: 'Teastdatsdatsdtasd atsdtasdtasd asdasd' },
    { id: 4, title: 'Testas4', description: 'Teastdatsdatsdtasd atsdtasdt asdasd asd' },
    { id: 5, title: 'Testas4', description: 'Teastdatsdatsdtasd atsdtasdt asdasd asd' },
    { id: 6, title: 'Testas4', description: 'Teastdatsdatsdtasd atsdtasdt asdasd asd' },
    { id: 7, title: 'Testas4', description: 'Teastdatsdatsdtasd atsdtasdt asdasd asd' },
  ];

  //   useEffect(() => {
  //     fetch(`${process.env.REACT_APP_BASE_URL}v1/content/skills`, {
  //       headers: {
  //         authorization: `Bearer ${authContext.token}`,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((items) => {
  //         if (items || authContext.token) {
  //           setItems(items);
  //         }
  //         return;
  //       })
  //       .catch((err) => alert(err));
  //   }, []);

  return (
    <S.GridContainer>
      {/* {!authContext.token && <h1>You need log in</h1>} */}
      {items.map((element) => (
        <S.CardStyle key={element.id}>
          <h2 key={element.id}>{element.title}</h2>
          <p>{element.description}</p>
        </S.CardStyle>
      ))}
    </S.GridContainer>
  );
};

export default Home;
