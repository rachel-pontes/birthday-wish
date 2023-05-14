import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';
import Planet from './components/Planet';
import './App.css';
import nasaSearch from './services/nasa-api';
import openaiSearch from './services/openai-api';

function App() {
  const [photo, setPhoto] = useState('');
  const [poem, setPoem] = useState('');
  const [name, setName] = useState('');
  const search = (date, newName) => {
    nasaSearch(date).then((result) => {
      setPhoto(result);
      setName(newName);
    });
    openaiSearch(newName).then((result) => {
      setPoem(result);
      console.log(poem);
    });
  };
  useEffect(() => {
    search('2023-05-10', 'Rachel');
  }, []);
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route element={<Home onSubmit={search} />} path="/" />
          <Route element={<Planet photo={photo} />} path="/planet" />
          <Route element={<NasaPhoto photo={photo} name={name} poem={poem} />} path="/nasaphoto" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
