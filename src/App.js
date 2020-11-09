import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

function App() {
  return (
    <div className="App">
      <p>process.env.AMBIENTE</p>
      <StrangerThings />
    </div>
  );
}

export default App;
