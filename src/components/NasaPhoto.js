import React from 'react';
import { Link } from 'react-router-dom';
import MyImage from '../img/play-pic.png';
import Astro1 from '../img/astro1.png';
import Astro2 from '../img/astro2.png';

export default function NasaPhoto(props) {
  const lines = props.poem.split('\n').map((line, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <div key={index} style={{ marginBottom: '20px' }}>{line}</div>
  ));
  const changePage = () => {

  };
  return (
    <div className="well-wishes">
      <img className="astro1" src={Astro1} alt="" />
      <img className="astro2" src={Astro2} alt="" />
      <p className="poem">{lines}</p>
      <div className="btn-container">
        <Link to="/planet">
          <img className="play-btn" src={MyImage} onClick={changePage} alt="" />
        </Link>
      </div>
      <div className="directions">Click to see the &apos;NASA Picture of the Day&apos; the day you were born, taking a lap around the world. </div>
      <div className="disclaimer">disclaimer: to get out of the next screen, change the route to /home</div>
    </div>
  );
}
