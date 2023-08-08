import React from 'react';
import './playerCard.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Cart/CartSlice';
import { filterPlayersInCart } from '../SearchResults/searchResultsSlice';

export const PlayerCard = (props) => {
    const dispatch = useDispatch();

    const addPlayerToCart = (e) => {
        e.preventDefault();
        dispatch(addToCart(props.player));
        dispatch(filterPlayersInCart(props.player));
    }
    
    return (
        <div className='playerCardContainer'>
            <h3>Name: {props.player.firstName} {props.player.lastName}</h3>
            <div className='baseDataContainer'>
                <p>{props.player.position}</p>
                <p id='auctionValue'>${props.player.auctionValue}</p>
            </div>
            <details>
                <summary>Additional Stats</summary>
                <p>Hits: {props.player.hits}</p>
                <p>FantasyPoints: {props.player.fantasyPoints}</p>
            </details>
            <button type='button' onClick={addPlayerToCart}>
                Add To Cart
            </button>
        </div>
    )
}