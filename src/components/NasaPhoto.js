import React from 'react';
import { Link } from 'react-router-dom';
import MyImage from '../img/play-pic.png';

export default function NasaPhoto(props) {
  const lines = props.poem.split('\n').map((line, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <div key={index} style={{ marginBottom: '20px' }}>{line}</div>
  ));
  const changePage = () => {

  };
  return (
    <div className="well-wishes">
      <h1>Happy birthday, {props.name}</h1>
      <p className="poem">{lines}</p>
      <div className="btn-container">
        <Link to="/planet">
          <img className="play-btn" src={MyImage} onClick={changePage} alt="" />
        </Link>
      </div>
    </div>
  );
}
