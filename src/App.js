import React from 'react';
import { Register, Login, Navigation, Home, Add, PrivateRoute } from './components/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as S from './App.styles';

const App = () => {
  return (
    <S.MainContainer>
      <Router>
        <Navigation />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/add"
            element={
              <PrivateRoute>
                <Add />
              </PrivateRoute>
            }
          />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </S.MainContainer>
  );
};

export default App;
