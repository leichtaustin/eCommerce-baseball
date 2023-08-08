import React from 'react';
import './checkoutDisplay.css';
import { useSelector } from 'react-redux';
import { selectPlayersInCart } from '../Cart/CartSlice';
import { CartPlayerCard } from '../Cart/CartPlayerCard';

export const CheckoutDisplay = () => {
    const cartPlayers = useSelector(selectPlayersInCart)

    const closeDisplayHandler = () => {
        document.getElementById('checkoutDisplay').style.display = 'none'
    }

    return (
        <div className='checkoutDisplayContainer' id='checkoutDisplay'>
            <button onClick={closeDisplayHandler}>X</button>
            <div>
                <h2>Your All Start Team is...</h2>
                <ul>
                    {cartPlayers.map((player) => {
                        return (
                            <li>{player.firstName} {player.lastName} <br/> Position: {player.position}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}