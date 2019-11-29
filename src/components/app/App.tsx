import React from 'react';
import '../../css/App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import NavMenu from '../common/NavMenu';
import PlayerSearchPage from '../pages/PlayerSearchPage';
import TournamentPage from '../pages/TournamentPage';
import TournamentDetailsComponent, { TournamentDetailsProps } from '../ifpa/TournamentDetailsComponent';
import HomePage from '../pages/HomePage';
import FindTournamentPage from '../pages/FindTournamentPage';
import NotFound from '../pages/NotFoundPage';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import VersusPage from '../pages/VersusPage';

const App = () => {
    return (
        <div className="App">
            <HashRouter>
                <Grid container spacing={0} justify="center">
                    <Grid item xs={12} md={9}>
                        <Header />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <NavMenu />
                    </Grid>
                    <Grid className="content" item xs={12} md={9}>
                        <Container >
                            <Switch>
                                <Route exact path="/" component={HomePage} />
                                <Route exact path="/tournaments" component={TournamentPage} />
                                <Route path="/tournaments/:TournamentID/:EventName" render={ (props: TournamentDetailsProps) => { return <TournamentDetailsComponent TournamentID={props.match.params.TournamentID}  EventName={props.match.params.EventName} />; } } />
                                <Route path="/players" component={PlayerSearchPage} />
                                <Route path="/versus" component={VersusPage} />
                                <Route path="/find-tournament" component={FindTournamentPage} />
                                <Route component={NotFound} />
                            </Switch>
                        </Container>
                    </Grid>
                </Grid>
            </HashRouter>
            <Footer />
        </div>
    );
};

export default App;
