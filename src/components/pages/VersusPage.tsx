import React, { FunctionComponent, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Player from '../../models/ifpa/Player';
import PlayerProfile from '../ifpa/PlayerProfile';
import FindPlayer from '../ifpa/FindPlayer';
import playerService from '../../services/ifpa/players';
import PlayerHistory from '../../models/ifpa/PlayerHistory';
import PlayerRankChart from '../ifpa/charts/PlayerRankChart';
import '../../css/VersusPage.css';

const VersusPage: FunctionComponent = () => {
    const [player1, setPlayer1] = useState<Player | null>(null);
    const [player1History, setPlayer1History] = useState<PlayerHistory | null>(null);
    const [player2, setPlayer2] = useState<Player | null>(null);
    const [player2History, setPlayer2History] = useState<PlayerHistory | null>(null);
    const [chartVisible, setChartVisible] = useState(false);

    useEffect(() => {
        let isSubscribed = true;

        if(player1 instanceof Player){
            playerService.getHistory(player1.ID)
                .then(history => {
                    if(history && isSubscribed){
                        setPlayer1History(history);
                    }
                });
        }
        else{
            setPlayer1History(null);
        }

        return () => {
            isSubscribed = false;
        };
    }, [player1]);

    useEffect(() => {
        let isSubscribed = true;

        if(player2 instanceof Player){
            playerService.getHistory(player2.ID)
                .then(history => {
                    if(history && isSubscribed){
                        setPlayer2History(history);
                    }
                });
        }
        else{
            setPlayer2History(null);
        }

        return () => {
            isSubscribed = false;
        };
    }, [player2]);

    useEffect(() => {
        setChartVisible((player1History instanceof PlayerHistory || player2History instanceof PlayerHistory));
    }, [player1History, player2History]);

    const displayPlayerProfile = (player: Player | null) => {
        if(player instanceof Player){
            return (<PlayerProfile player={player} />);
        }

        return null;
    };

    return (
        <section>
            <h3>Head to Head</h3>
            <Grid container>
                <Grid item xs={12} sm={5}>
                    <Grid container>
                        <Grid item xs={12} sm={2}>Player 1:</Grid>
                        <Grid item xs={12} sm={10}>
                            <FindPlayer setPlayerProfile={setPlayer1} />
                        </Grid>
                    </Grid>
                    {displayPlayerProfile(player1)}
                </Grid>
                <Grid item xs={12} sm={1}>
                    <Grid container direction="row" alignItems="center" style={{ height: '100%', textAlign: 'center' }}>
                        <Grid item xs={12}>Vs:</Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Grid container>
                        <Grid item xs={12} sm={2}>Player 2:</Grid>
                        <Grid item xs={12} sm={10}>
                            <FindPlayer setPlayerProfile={setPlayer2} />
                        </Grid>
                    </Grid>
                    {displayPlayerProfile(player2)}
                </Grid>
            </Grid>
            <Grid container className={(chartVisible) ? '' : 'hideChart' }>
                <PlayerRankChart Player1History={player1History} Player2History={player2History} />
            </Grid>
        </section>
    );
};

export default VersusPage;