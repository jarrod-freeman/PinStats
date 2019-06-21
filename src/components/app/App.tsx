import React from 'react';
import '../../css/App.css';
import {Route, NavLink, HashRouter} from 'react-router-dom'
import Profile from '../ifpa/ProfileComponent';
import TournamentListComponent from '../ifpa/tournament/TournamentListComponent';
import HomeComponent from '../HomeComponent';

function App() {
  return (
    <div className="App">
      <h1>IFPA API Explorer</h1>
      <HashRouter>
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/tournaments">Tournaments</NavLink></li>
          <li><NavLink to="/players">Player Search</NavLink></li>
        </ul>

        <div>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/tournaments" component={TournamentListComponent} />
          <Route path="/players" component={Profile} />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
