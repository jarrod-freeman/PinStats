import React, { FunctionComponent, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Player from '../../models/ifpa/Player';
import PlayerProfile from '../ifpa/PlayerProfile';
import FindPlayer from '../ifpa/FindPlayer';
import playerService from '../../services/ifpa/players';
import PlayerHistory from '../../models/ifpa/PlayerHistory';

const VersusPage: FunctionComponent = () => {
    const [player1, setPlayer1] = useState<Player | null>(null);
    const [player1History, setPlayer1History] = useState<PlayerHistory | null>(null);
    const [player2, setPlayer2] = useState<Player | null>(null);
    const [player2History, setPlayer2History] = useState<PlayerHistory | null>(null);

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

        return () => {
            isSubscribed = false;
        };
    }, [player2]);

    const displayPlayerProfile = (player: Player | null) => {
        if(player instanceof Player){
            return (<PlayerProfile Player={player} />);
        }

        return null;
    };

    const displayChart = () => {
        console.log(player1History);
        console.log(player2History);
    };

    return (
        <section>
            <h3>Head to Head</h3>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Grid container>
                        <Grid item xs={12} sm={2}>Player 1:</Grid>
                        <Grid item xs={12} sm={10}>
                            <FindPlayer SetPlayerProfile={setPlayer1} />
                        </Grid>
                    </Grid>
                    {displayPlayerProfile(player1)}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Grid container>
                        <Grid item xs={12} sm={2}>Player 2:</Grid>
                        <Grid item xs={12} sm={10}>
                            <FindPlayer SetPlayerProfile={setPlayer2} />
                        </Grid>
                    </Grid>
                    {displayPlayerProfile(player2)}
                </Grid>
            </Grid>
            <Grid container>
                <div>Chart goes here</div>
                {displayChart()}
            </Grid>
        </section>
    );
};

export default VersusPage;