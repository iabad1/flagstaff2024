
import './App.css';
import itineraryList from './data/itineraryList.json'
import Itinerary from './Components/Itinerary';


function App() {
  return (
    <div className="App">
      <Itinerary itineraryList={itineraryList}/>
    </div>
  );
}

export default App;
