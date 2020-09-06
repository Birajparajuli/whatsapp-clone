import React, {useState} from 'react';

import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Switch } from '@material-ui/core';

import Login from './Login';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      {!user ?(
        <Login/>
      ):(
        <div className="app__body">
        
        <Router>
          <Sidebar/>
          <Switch>
            <Route strict path =" /rooms/:roomId">
              <Chat />
            </Route>
            
            <Route path = "/">
              <Chat />
            </Route>
          </Switch>
        </Router>
      </div>
      )}

    </div>
  );
}

export default App;
