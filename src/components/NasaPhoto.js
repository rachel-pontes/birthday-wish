import React from 'react';
import NavBar from './NavBar';

export default function NasaPhoto(props) {
  return (
    <>
      <NavBar />
      <div>
        <img src={props.photo} alt="" />
      </div>
    </>
  );
}
