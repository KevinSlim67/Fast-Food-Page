import React from 'react';
import NavBar from './navbar';
import ReviewGenerator from './review_generator';

function Header() {
    return ( 
    <div id="header" className='relative'>
        <NavBar />
        <ReviewGenerator />
    </div> 
    );
}

export default Header;