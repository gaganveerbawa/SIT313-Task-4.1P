import React from 'react'
import './Newsletter.css'

function Newsletter() {
    return (<div className="newsletter">
        <h2><b>SIGN UP FOR OUR DAILY INSIDER</b></h2>
        <form action="emailBox">
            <input className="email" type="email" placeholder="Enter your email" />
        </form>
        <button type="submit"> Subscribe </button>
    </div>
    );
}

export default Newsletter