import React from 'react';
import { Register, Login, Navigation, Home, Add } from './components/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Router>
        <Navigation />
        <Routes>
          {/* <Route
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
          /> */}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
