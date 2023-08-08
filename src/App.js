import './App.css';
import { useDispatch } from 'react-redux';
import { PlayerCard } from './components/Player_Card/Player_Card';
import { SearchResults } from './components/SearchResults/SearchResults';
import { playerFactory } from './utility/dataFactory';
import { addPlayerCards } from './components/SearchResults/searchResultsSlice';
import { Cart } from './components/Cart/Cart';
import { Filters } from './components/Filters/Filters';
import { Header } from './components/Header/Header';
import { CheckoutDisplay } from './components/CheckoutDisplay/CheckoutDisplay';

function App() {
  const dispatch = useDispatch();
  let isFirstLoad = true;

  if(isFirstLoad) {
    let player;
    for(let i = 0; i < 20; i++) {
      player = playerFactory();
      dispatch(addPlayerCards(player));
    };
    isFirstLoad = false;
  }
  
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div className='playerContainer'>
        <Filters />
        <SearchResults />
        <Cart />
      </div>
      <CheckoutDisplay />     
    </div>
  );
}

export default App;
