import React from 'react';
import './playerCard.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Cart/CartSlice';
import { filterPlayersInCart } from '../SearchResults/searchResultsSlice';
import { imageArray } from '../../utility/images';

export const PlayerCard = (props) => {
    const dispatch = useDispatch();

    const addPlayerToCart = (e) => {
        e.preventDefault();
        dispatch(addToCart(props.player));
        dispatch(filterPlayersInCart(props.player));
    }
    
    return (
        <div className='playerCardContainer'>
            <div className='profileContainer'>
                <h3>{props.player.firstName} {props.player.lastName}</h3>
                <img src={props.player.photoURL} alt='player profile' />
            </div>
            <div className='baseDataContainer'>
                <p id='positionText'>{props.player.position}</p>
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