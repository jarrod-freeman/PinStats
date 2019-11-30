import React from 'react';
import '../../css/App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import NavMenu from '../common/NavMenu';
import PlayerSearchPage from '../pages/PlayerSearchPage';
import TournamentPage from '../pages/TournamentPage';
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
                    <Grid item xs={12} md={9} style={{ minHeight: '15vh' }}>
                        <Header />
                    </Grid>
                    <Grid item xs={12} md={9} style={{ minHeight: '6vh' }}>
                        <NavMenu />
                    </Grid>
                    <Grid className="content" item xs={12} md={9} style={{ minHeight: '79vh' }}>
                        <Container >
                            <Switch>
                                <Route exact path="/" component={HomePage} />
                                <Route exact path="/tournaments/:ID?" component={TournamentPage} />
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
