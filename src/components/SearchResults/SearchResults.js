import React from 'react';
import './searchResults.css';
import { playerFactory } from '../../utility/dataFactory';
import { PlayerCard } from '../Player_Card/Player_Card';
import { useSelector } from 'react-redux';
import { selectFilteredPlayers, selectSearchResults } from './searchResultsSlice';

export const SearchResults = () => {

    const displayedResults = useSelector(selectSearchResults);

    return (
        <div className='searchResultsContainer'>
            {displayedResults.map((player) =>{
                if(!(player.isInCart)) {
                return (
                    <div>
                        <PlayerCard 
                            player = {player}                        
                        />
                    </div>

                );}
            })}
        </div>
    )
}