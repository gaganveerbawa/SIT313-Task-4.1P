import React from 'react'
import './Header.css'
// import 'font-awesome/css/font-awesome.min.css';

function Header() {
    return  (      <div className='navBar'>
    <h2><b>DEV@Deakin</b></h2>
    <form action="searchBox">
        <input className='searchBar' type="searchBar" placeholder="&#xF002; Search..." style={{fontFamily: 'FontAwesome'}} />
    </form>

    <a href="#POST">Post</a>
    <a href="#LOGIN">Login</a>
 
</div>
);
}

export default Header