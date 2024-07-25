import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Tours from './components/Tours';
import data from './components/Data';

function App() {

  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0){
    return(
      <div className='refresh'>
        <h2 className='tours-empty-heading'>No Tours Left ...!</h2>
        <button className='refresh-btn' onClick={()=> setTours(data)}>
          Refresh
        </button>
      </div>
    );
  } 

  return (
    <div className='App'>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
