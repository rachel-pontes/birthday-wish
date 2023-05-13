import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';
import './App.css';
import nasaSearch from './services/nasa-api';

function App() {
  const [photo, setPhoto] = useState('');
  const search = (date) => {
    nasaSearch(date).then((result) => {
      setPhoto(result);
    });
  };
  useEffect(() => {
    search('2023-05-10');
  }, []);
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route element={<Home onDateChange={search} />} path="/" />
          <Route element={<NasaPhoto photo={photo} />} path="/nasaphoto" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
