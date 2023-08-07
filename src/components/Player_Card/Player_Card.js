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
            <h2>Name: {props.player.firstName} {props.player.lastName}</h2>
            <p>Position: {props.player.position}</p>
            <p>Auction Value: {props.player.auctionValue}</p>
            <p>Hits: {props.player.hits}</p>
            <p>FantasyPoints: {props.player.fantasyPoints}</p>
            <p>ID: {props.player.playerId}</p>
            <button type='button' onClick={addPlayerToCart}>
                Add To Cart
            </button>
        </div>
    )
}