import React from 'react';
import '../../css/App.css';
import { HashRouter, Route } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import NavMenu from '../common/NavMenu';
import Profile from '../ifpa/ProfileComponent';
import TournamentList from '../ifpa/tournament/TournamentList';
import TournamentDetailsComponent, { TournamentDetailsProps } from '../ifpa/tournament/TournamentDetailsComponent';
import HomeComponent from '../HomeComponent';

const App = () => {
    return (
        <div className="App">
            <HashRouter>
                <Header />
                <NavMenu />

                <div className="content">
                    <Route exact path="/" component={HomeComponent} />
                    <Route exact path="/tournaments" component={TournamentList} />
                    <Route path="/tournaments/:TournamentID/:EventName" render={ (props: TournamentDetailsProps) => { return <TournamentDetailsComponent TournamentID={props.match.params.TournamentID}  EventName={props.match.params.EventName} />; } } />
                    <Route path="/players" component={Profile} />
                </div>
            </HashRouter>
            <Footer />
        </div>
    );
};

export default App;
