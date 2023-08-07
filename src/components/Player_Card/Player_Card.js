import React from 'react';

export const PlayerCard = (props) => {
    return (
        <div className='playerCardContainer'>
            <h2>Name: {props.firstName} {props.lastName}</h2>
            <p>Position: {props.position}</p>
            <p>Auction Value: {props.auctionValue}</p>
            <p>Hits: {props.hits}</p>
            <p>FantasyPoints: {props.fantasyPoints}</p>
            <button type='button'>
                Add To Cart
            </button>
        </div>
    )
}