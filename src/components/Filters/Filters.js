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
        let formOutput = {
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
        dispatch(updateFilter(formOutput));
        Object.keys(formOutput).forEach((key) => {
            filterArray.push({position: key, value: formOutput[key]})
        });
        
        //reset the filtered players and then reapply filters
        dispatch(resetFilteredPlayers());
        //filter players in cart
        cartPlayers.map(player => {
            dispatch(filterPlayersInCart(player));
        });
        //reapply new filters user submitted
        filterArray.map(element => {
            if(element.value) {
                dispatch(filterPlayersByPosition(element.position));
            }
        })
    }
    
    return (
        <div className='filterContainer'>
            <h2>Filters: </h2>
            <form onSubmit={handleFormSubmit}>
                <input type='checkbox' id='outfield' name='outfield'/>
                <label for='outfield'>OF</label>
                <br/>
                <input type='checkbox' id='shortstop' name='shortstop'/>
                <label for='shortstop'>SS</label>
                <br/>
                <input type='checkbox' id='starting_pitcher' name='starting_pitcher'/>
                <label for='starting_pitcher'>SP</label>
                <br/>
                <input type='checkbox' id='relief_pitcher' name='relief_pitcher'/>
                <label for='relief_pitcher'>RP</label>
                <br/>
                <input type='checkbox' id='first' name='first'/>
                <label for='first'>1B</label>
                <br/>
                <input type='checkbox' id='second' name='second'/>
                <label for='second'>2B</label>
                <br/>
                <input type='checkbox' id='third' name='third'/>
                <label for='third'>3B</label>
                <br/>
                <input type='checkbox' id='catcher' name='catcher'/>
                <label for='catcher'>C</label>
                <br/>
                <input type='checkbox' id='designated_hitter' name='designated_hitter'/>
                <label for='designated_hitter'>DH</label>
                <br/>
                <br/>
                <button type='submit'>Apply Filters</button>               

            </form>
        </div>
    )
}