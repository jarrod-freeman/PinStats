import React, { FunctionComponent } from 'react';
import Player from '../../models/ifpa/Player';
import Grid from '@material-ui/core/Grid';

interface PlayerProfileParams {
    Player: Player
}

const PlayerProfile: FunctionComponent<PlayerProfileParams> = ({ Player }: PlayerProfileParams) => {
    return (
        <section>
            <h3>Player Info</h3>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={2}><img style={{ width: '100%' }} src={`https://www.ifpapinball.com/images/profiles/players/${Player.ID}.jpg`} alt="player avatar" /></Grid>
                <Grid item xs={12} sm={10}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={2}>Name:</Grid>
                        <Grid item xs={12} sm={10}>{Player.FirstName + ' ' + Player.LastName}</Grid>
                        <Grid item xs={12} sm={2}>WPPR Rank:</Grid>
                        <Grid item xs={12} sm={10}>{Player.Stats ? Player.Stats.CurrentRank : null}</Grid>
                        <Grid item xs={12} sm={2}>Player #:</Grid>
                        <Grid item xs={12} sm={10}>{Player.ID}</Grid>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    );
};

export default PlayerProfile;