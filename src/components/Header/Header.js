import React from 'react';
import './header.css';

export const Header = () => {
    return (
        <div className='headerContainer'>
            <h1 data-testid="title-element">Fantasy Backyard Baseball Team Auction</h1>
            <p>**For the sake of this project demo, the data below is mock data and does not represent any real players**</p>
        </div>
    )
}