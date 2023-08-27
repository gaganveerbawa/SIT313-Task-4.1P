import React from 'react';
import './CenteredText.css';

function CenteredText({ text }) {
  return (
    <div className="centered-container">
      <h2>{text}</h2>
    </div>
  );
}

export default CenteredText;