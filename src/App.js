import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 style={{textAlign: "center"}}>Counter App</h2>
      </header>
      <Counter/>
    </div>
  );
}

export default App;
