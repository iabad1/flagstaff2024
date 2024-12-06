
import './App.css';
import { useState } from 'react';
import itineraryList from './data/itineraryList.json';
import Itinerary from './Components/Itinerary';
import Welcome from './Components/Welcome';
import Header from './Components/Header'

function getToday() {
  const today = new Date();
  return today;
}

function App() {
  const[today, setToday] = useState(getToday());
  return (
    <div className="main-container">
      <Header />
      <hr />
      <Welcome today={today} itineraryList={itineraryList}/>
      <hr />
      <Itinerary itineraryList={itineraryList}/>
      <hr />
      <section>
        <div id='upload-button-container'>
          <a id="upload-button" href='https://drive.google.com/drive/folders/1EpIP9WNKCdDFW5TZq_SlecuSk-yRxjsk' target='_blank'>Upload/View Trip Photos</a>
        <div>
          <a href='https://drive.google.com/file/d/1oYjH_FYnIB5rJTcE9F_nJGpYhiOAJiPe/view?usp=sharing' target='_blank'>View Itinerary.pdf</a>
        </div>
        </div>
      </section>
      
    </div>
  );
}

export default App;
