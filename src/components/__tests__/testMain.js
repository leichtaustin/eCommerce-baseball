import React from 'react';
import App from '../../App'
import { fireEvent, render, screen } from '@testing-library/react';
import { setupStore } from '../../store';
import { renderWithProviders } from '../../utility/testUtils';
import { Header } from '../Header/Header';
import { Filters } from '../Filters/Filters';
import playerFiltersReducer, { updateFilter } from '../Filters/FiltersSlice';
import { selectPlayerFilters } from '../Filters/FiltersSlice';
import CartSliceReducer, { addToCart } from '../Cart/CartSlice';
import { Cart } from '../Cart/Cart';



test('sanity check', () => {
    expect(true).toBe(true);
});

describe('<Header />', () => {
    it('renders title of page', () => {
        const store = setupStore()

        renderWithProviders(<Header />, {store})
        const title = screen.getByTestId('title-element');
        expect(title).toHaveTextContent('Team Auction');
    })
})

describe('<Filters />', () => {
    it('renders filter element', () => {
        const store = setupStore();
        
        renderWithProviders(<Filters />, {store} )
        const filters = screen.getByTestId('filterTest');
        expect(filters).toBeInTheDocument;
    })

    // it('updates filter state on form submit', () => {
    //     const previoiusState = {};
    //     const store = setupStore();
    //     renderWithProviders(<Filters />, {store} );
    //     fireEvent.click(screen.getByTestId('oftest'))

    //     let formOutput = {
    //         Outfield: screen.getAllByTestId('oftest').value
    //     }
    //     //fireEvent.click(screen.getByText('Apply Filters'));

    //     expect(playerFiltersReducer(previoiusState, updateFilter(formOutput))).toEqual({
    //         Outfield: true,
    //     })
    // })
})

describe('<Cart />', () => {
    it('Adds player value to total value', () => {
        const previousState = {
            playersInCart: [],
            cartTotal: 0,
        }

        expect(CartSliceReducer(previousState, addToCart({firstName: 'Thomas', lastName: 'Turner', auctionValue: 46}))).toEqual(
            {
                playersInCart: [{firstName: 'Thomas', lastName: 'Turner', auctionValue: 46, isInCart: true,}],
                cartTotal: 46,
            }
        )
    })
    it('renders cart total on screen', () => {
        const store = setupStore();
        renderWithProviders(<Cart/>, {store});
        addToCart({firstName: 'Thomas', lastName: 'Turner', auctionValue: 46})
        expect("46").toBeInTheDocument;
    })
})