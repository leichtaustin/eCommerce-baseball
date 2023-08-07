import './App.css';
import { useDispatch } from 'react-redux';
import { PlayerCard } from './components/Player_Card/Player_Card';
import { SearchResults } from './components/SearchResults/SearchResults';
import { playerFactory } from './utility/dataFactory';
import { addPlayerCards } from './components/SearchResults/searchResultsSlice';

function App() {
  const dispatch = useDispatch();
  const generatePlayerData = () => {
    let player;
    for(let i = 0; i < 20; i++) {
      player = playerFactory();
      dispatch(addPlayerCards(player));
    }
  }
  
  return (
    <div className="App">
      <button onClick={generatePlayerData}>Get Data</button>
      <SearchResults />
    </div>
  );
}

export default App;
