import React, { lazy, Suspense } from 'react';
import { Register, Login, Navigation, Home, PrivateRoute, Spinner } from './components/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as S from './App.styles';

const Add = lazy(() => import('./components/Pages/Add/Add'));

const App = () => {
  return (
    <S.MainContainer>
      <Router>
        <Navigation />
        <Suspense fallback={<Spinner />}>
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
        </Suspense>
      </Router>
    </S.MainContainer>
  );
};

export default App;
