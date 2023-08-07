import React from 'react';
import { playerFactory } from '../../utility/dataFactory';
import { PlayerCard } from '../Player_Card/Player_Card';
import { useSelector } from 'react-redux';
import { selectSearchResults } from './searchResultsSlice';

export const SearchResults = () => {

    const displayedResults = useSelector(selectSearchResults);

    return (
        <div className='searchResultsContainer'>
            {displayedResults.map((player) =>{
                return (
                    <div>
                        <PlayerCard 
                            firstName={player.firstName}
                            lastName={player.lastName}
                            auctionValue={player.auctionValue}
                            position={player.position}
                            hits={player.hits}
                            fantasyPoints={player.fantasyPoints}                        
                        />
                    </div>

                );
            })}
        </div>
    )
}