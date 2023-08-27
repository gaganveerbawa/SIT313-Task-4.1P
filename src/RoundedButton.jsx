import React from 'react';
import './RoundedButton.css';

function RoundedButton({ text }) {
  return (
    <div className = 'center'>
    <button className='roundbutton'><b>{text}</b></button>
    </div>
  );
}

export default RoundedButton;