import React from 'react';

import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Switch } from '@material-ui/core';

function App() {
  return (
    <div className="App">
        <div className="app__body">
          <Router>
            <Switch>
              
              <Sidebar/>
              <Route path = "/rooms/:roomId">
                {/* chat */}
                <Chat/>
              </Route>

              <Route path = "/">
                <Chat/>
              </Route>

            </Switch>
          </Router>
        </div>
    </div>
  );
}

export default App;
