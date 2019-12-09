import React, { FunctionComponent } from 'react';
import Tournament from '../../models/ifpa/Tournament';
import Grid from '@material-ui/core/Grid';
import  '../../css/TournamentList.css';

interface TournamentDetailsParams {
    tournament: Tournament
}

const TournamentDetails: FunctionComponent<TournamentDetailsParams> = ({ tournament }: TournamentDetailsParams) => {

    const getSectionHeader = () => {
        if(tournament.Events && tournament.Events.length > 0){
            return `${tournament.Name} - ${tournament.Events[0].Name}`;
        }

        return tournament.Name;
    };

    const getEventWinner = () => {
        if(tournament.Events && tournament.Events.length > 0){
            return tournament.Events[0].WinnerName;
        }

        return null;
    };

    const getEventDate = () => {
        if(tournament.Events && tournament.Events.length > 0 && tournament.Events[0].Date){
            return tournament.Events[0].Date.toLocaleDateString();
        }

        return null;
    };

    return (
        <section>
            <h3>{getSectionHeader()}</h3>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={2}>
                    <label htmlFor='tournamentWinner'>Winner:</label>
                </Grid>
                <Grid item xs={12} sm={10}>
                    <div id='tournamentWinner'>{getEventWinner()}</div>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <label htmlFor='tournamentDate'>Date:</label>
                </Grid>
                <Grid item xs={12} sm={10}>
                    <div id='tournamentDate'>{getEventDate()}</div>
                </Grid>
            </Grid>
        </section>
    );
};

export default TournamentDetails;