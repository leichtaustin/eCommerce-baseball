import React from 'react';
import App from '../../App'
import { render, screen } from '@testing-library/react';
import { setupStore } from '../../store';
import { renderWithProviders } from '../../utility/testUtils';


test('sanity check', () => {
    expect(true).toBe(true);
});

test('render searchBar', () => {
    const store = setupStore()

    renderWithProviders(<App />, { store })
    const titleElement = screen.getByTestId('title-element');
    expect(titleElement).toBeInTheDocument();
})
