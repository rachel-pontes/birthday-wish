import React from 'react';
import '../Planet.css';

export default function Planet(props) {
  return (
    <div className="planet-page">
      <div id="earth" style={{ backgroundImage: `url(${props.photo})` }} />
      <div id="space">
        <div className="stars" />
        <div className="stars" />
        <div className="stars" />
        <div className="stars" />
        <div className="stars" />
      </div>
    </div>
  );
}
