import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from './FiltersSlice';
import { filterPlayersByPosition, filterPlayersInCart, resetFilteredPlayers } from '../SearchResults/searchResultsSlice';
import { selectPlayersInCart } from '../Cart/CartSlice';
import './filter.css';

export const Filters = () => {
    const dispatch = useDispatch();
    const cartPlayers = useSelector(selectPlayersInCart);
    
    const handleFormSubmit = (e) => {
        let filterArray = [];
        e.preventDefault();
        let filterOutput = {
            Outfield: document.getElementById('outfield').checked,
            Shortstop: document.getElementById('shortstop').checked,
            StartingPitcher: document.getElementById('starting_pitcher').checked,
            ReliefPitcher: document.getElementById('relief_pitcher').checked,
            FirstBase: document.getElementById('first').checked,
            SecondBase: document.getElementById('second').checked,
            ThirdBase: document.getElementById('third').checked,
            Catcher: document.getElementById('catcher').checked,
            DesignatedHitter: document.getElementById('designated_hitter').checked,
        }
        dispatch(updateFilter(filterOutput));
        Object.keys(filterOutput).forEach((key) => {
            filterArray.push({position: key, value: filterOutput[key]})
        });
        
        //reset the filtered players and then reapply filters
        dispatch(resetFilteredPlayers());
        //filter players in cart
        cartPlayers.map(player => {
            dispatch(filterPlayersInCart(player));
        });
        //reapply new filters user submitted
        if(filterArray.some(e => e.value === true)){
        filterArray.map(element => {
            if(!(element.value)) {
                dispatch(filterPlayersByPosition(element.position));
            }
        })};
    }
    
    return (
        <div className='filterContainer'>
            <h2>Filters: </h2>
            <form onSubmit={handleFormSubmit} data-testid='filterTest'>
                <input type='checkbox' id='outfield' name='outfield' data-testid='oftest'/>
                <label htmlFor='outfield'>OF</label>
                <br/>
                <input type='checkbox' id='shortstop' name='shortstop'/>
                <label htmlFor='shortstop'>SS</label>
                <br/>
                <input type='checkbox' id='starting_pitcher' name='starting_pitcher'/>
                <label htmlFor='starting_pitcher'>SP</label>
                <br/>
                <input type='checkbox' id='relief_pitcher' name='relief_pitcher'/>
                <label htmlFor='relief_pitcher'>RP</label>
                <br/>
                <input type='checkbox' id='first' name='first'/>
                <label htmlFor='first'>1B</label>
                <br/>
                <input type='checkbox' id='second' name='second'/>
                <label htmlFor='second'>2B</label>
                <br/>
                <input type='checkbox' id='third' name='third'/>
                <label htmlFor='third'>3B</label>
                <br/>
                <input type='checkbox' id='catcher' name='catcher'/>
                <label htmlFor='catcher'>C</label>
                <br/>
                <input type='checkbox' id='designated_hitter' name='designated_hitter'/>
                <label htmlFor='designated_hitter'>DH</label>
                <br/>
                <br/>
                <button type='submit'>Apply Filters</button>              

            </form>
        </div>
    )
}