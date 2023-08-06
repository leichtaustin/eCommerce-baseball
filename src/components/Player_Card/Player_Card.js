import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const PlayerCard = (props) => {
    return (
        <div className='playerCardContainer'>
            <h2>Name: FName, LName</h2>
            <p>Position: SS</p>
            <p>Auction Value: $42</p>
            <p>ADP: 15</p>
            <button type='button'>
                Add To Cart
            </button>
        </div>
    )
}