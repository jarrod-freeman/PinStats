import React from 'react';
import '../../css/App.css';
import {Route, NavLink, HashRouter} from 'react-router-dom'
import Profile from '../ifpa/ProfileComponent';
import TournamentList from '../ifpa/tournament/TournamentList';
import TournamentDetailsComponent, { TournamentDetailsProps } from '../ifpa/tournament/TournamentDetailsComponent';
import HomeComponent from '../HomeComponent';

const App = () => {
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
          <Route exact path="/tournaments" component={TournamentList} />
          <Route path="/tournament/:ID" render={ (props: TournamentDetailsProps) => { return <TournamentDetailsComponent ID={props.match.params.ID} /> } } />
          <Route path="/players" component={Profile} />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
