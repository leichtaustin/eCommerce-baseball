import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from './CartSlice';
import { addPlayerCards, filterPlayersInCart } from '../SearchResults/searchResultsSlice';

export const CartPlayerCard = (props) => {
    const dispatch = useDispatch();

    const removePlayer = (e) => {
        e.preventDefault();
        dispatch(removeFromCart(props.player));
        dispatch(addPlayerCards(props.player));

    }


    return (
        <div className="cartPlayerCard">
            <h3>{props.player.firstName} {props.player.lastName}</h3>
            <p>${props.player.auctionValue}</p>
            <button onClick={removePlayer}>Remove from Cart</button>
        </div>
    )
}