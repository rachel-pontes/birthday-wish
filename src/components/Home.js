import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Star from '../img/star-pic.png';

export default function Home(props) {
  const [birthName, setName] = useState('');
  const [date, setDate] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
    // props.onNameChange(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <div className="main-text">
      <div className="title">
        <img className="star" src={Star} alt="" />
        <h1>You are extra-orbit-ary!</h1>
        <img className="star" src={Star} alt="" />
      </div>
      <h2 className="first-happy">Happy</h2>
      <h2 className="second-happy">Happy</h2>
      <h2 className="third-happy">Birthday</h2>
      <h2 className="details">Give us your birthday deets...</h2>
      <div className="inputs">
        <input className="input-box" type="text" value={birthName} onChange={handleNameChange} placeholder="name" />
        <input className="input-box" type="text" value={date} onChange={handleDateChange} placeholder="birthday (YYYY-MM-DD)" />
      </div>
      <div className="descriptors">
        <h3>NAME</h3>
        <h3>BIRTHDAY (YYYY-MM-DD)</h3>

      </div>
      <div className="submit">
        <Link to="/nasaphoto" className="submit-button" onClick={() => { props.onSubmit(date, birthName); }}>submit</Link>
      </div>
    </div>
  );
}
