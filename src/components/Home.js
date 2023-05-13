import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div>
      <h1>Name of recipient:</h1>
      <input type="text" value={birthName} onChange={handleNameChange} />
      <h1>Birthday of recipient:</h1>
      <h2>Format: YYYY-MM-DD</h2>
      <input type="text" value={date} onChange={handleDateChange} />
      <div>
        <Link to="/nasaphoto" onClick={() => { props.onDateChange(date); }}>Preview Birthday Card</Link>
      </div>
    </div>
  );
}
