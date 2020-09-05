import React from 'react';

import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'

function App() {
  return (
    <div className="App">
    

        <div className="app__body">
          {/* Sidebar */}
          <Sidebar/>
          {/* chat */}
          <Chat/>
        </div>
    </div>
  );
}

export default App;
