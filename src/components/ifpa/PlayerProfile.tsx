import React, { FunctionComponent } from 'react';
import Player from '../../models/ifpa/Player';
import Grid from '@material-ui/core/Grid';

interface PlayerProfileParams {
    player: Player
}

const PlayerProfile: FunctionComponent<PlayerProfileParams> = ({ player }: PlayerProfileParams) => {
    return (
        <section>
            <h3>Player Info</h3>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <img id='playerImage' style={{ width: '100%' }} src={`https://www.ifpapinball.com/images/profiles/players/${player.ID}.jpg`} alt=" " />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={2}>
                            <label htmlFor='playerName'>Name:</label>
                        </Grid>
                        <Grid item sm={1}></Grid>
                        <Grid item xs={12} sm={9}>
                            <div id='playerName'>{player.FirstName + ' ' + player.LastName}</div>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <label htmlFor='playerRank'>WPPR Rank:</label>
                        </Grid>
                        <Grid item sm={1}></Grid>
                        <Grid item xs={12} sm={9}>
                            <div id='playerRank'>{player.Stats ? player.Stats.CurrentRank : null}</div>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <label htmlFor='playerID'>Player #:</label>
                        </Grid>
                        <Grid item sm={1}></Grid>
                        <Grid item xs={12} sm={9}>
                            <div id='playerID'>{player.ID}</div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    );
};

export default PlayerProfile;