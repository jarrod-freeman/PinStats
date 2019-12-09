import React, { FunctionComponent } from 'react';
import Tournament from '../../models/ifpa/Tournament';
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
        if(tournament.Events && tournament.Events.length > 0){
            return tournament.Events[0].Date.toLocaleDateString();
        }

        return null;
    };

    return (
        <section>
            <h3>{getSectionHeader()}</h3>

            <div>
                Winner: {getEventWinner()}
            </div>
            <div>
                Date: {getEventDate()}
            </div>
        </section>
    );
};

export default TournamentDetails;