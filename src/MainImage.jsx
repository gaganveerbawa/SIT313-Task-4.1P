import React from 'react'
import './MainImage.css'
import deakin from './images/deakin.jpg'

function MainImage() {
    return (
    <div >
    <img className = 'mainImage' src={deakin} alt="deakin" />
    </div>
    );
}

export default MainImage;