import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from './FiltersSlice';
import { filterPlayersByPosition } from '../SearchResults/searchResultsSlice';

export const Filters = () => {
    const dispatch = useDispatch();
    
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
            Catcher: document.getElementById('catcher').checked
        }
        dispatch(updateFilter(formOutput));
        Object.keys(formOutput).forEach((key) => {
            filterArray.push({position: key, value: formOutput[key]})
        });
        
        filterArray.map(element => {
            if(element.value) {
                dispatch(filterPlayersByPosition(element.position));
            }
        })
    }
    
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <h3>Positions: </h3>
                <input type='checkbox' id='outfield' name='outfield'/>
                <label for='outfield'>OF</label>
                <input type='checkbox' id='shortstop' name='shortstop'/>
                <label for='shortstop'>SS</label>
                <input type='checkbox' id='starting_pitcher' name='starting_pitcher'/>
                <label for='starting_pitcher'>SP</label>
                <input type='checkbox' id='relief_pitcher' name='relief_pitcher'/>
                <label for='relief_pitcher'>RP</label>
                <input type='checkbox' id='first' name='first'/>
                <label for='first'>1B</label>
                <input type='checkbox' id='second' name='second'/>
                <label for='second'>2B</label>
                <input type='checkbox' id='third' name='third'/>
                <label for='third'>3B</label>
                <input type='checkbox' id='catcher' name='catcher'/>
                <label for='catcher'>C</label>
                <br/>
                <button type='submit'>Apply Filters</button>               

            </form>
        </div>
    )
}