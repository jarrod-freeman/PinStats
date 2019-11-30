import React, { FunctionComponent } from 'react';
import Tournament from '../../models/ifpa/Tournament';
import  '../../css/TournamentList.css';

interface TournamentDetailsParams {
    Tournament: Tournament
}

const TournamentDetails: FunctionComponent<TournamentDetailsParams> = ({ Tournament }: TournamentDetailsParams) => {

    const getEventWinner = () => {
        if(Tournament.Events && Tournament.Events.length > 0){
            return Tournament.Events[0].WinnerName;
        }

        return null;
    };

    const getEventDate = () => {
        if(Tournament.Events && Tournament.Events.length > 0){
            return Tournament.Events[0].Date.toLocaleDateString();
        }

        return null;
    };

    return (
        <div>
            <h3>{Tournament.Name} - {Tournament.Events[0].Name}</h3>

            <div>
                Winner: {getEventWinner()}
            </div>
            <div>
                Date: {getEventDate()}
            </div>
        </div>
    );
};

export default TournamentDetails;