import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from './CartSlice';
import { addPlayerFromCart } from '../SearchResults/searchResultsSlice';
import './cartPlayerCard.css';

export const CartPlayerCard = (props) => {
    const dispatch = useDispatch();

    const removePlayer = (e) => {
        e.preventDefault();
        dispatch(removeFromCart(props.player));
        dispatch(addPlayerFromCart(props.player));

    }


    return (
        <div className="cartPlayerCard">
            <h3>{props.player.firstName} {props.player.lastName}</h3>
            <p id='cartCardValue'>${props.player.auctionValue}</p>
            <button id='removeFromCart' onClick={removePlayer}>Remove from Cart</button>
        </div>
    )
}