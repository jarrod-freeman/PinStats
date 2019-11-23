import React, {FunctionComponent, Props, useState, useEffect} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import Tournament from '../../../models/ifpa/Tournament';
import  '../../../css/TournamentList.css';
import tournamentService from '../../../services/tournaments';

interface RouteParams {
    TournamentID: string,
    EventName: string
};

const TournamentDetailsComponent: FunctionComponent<any> = (props: RouteParams) => {
    const [tournament, setTournament] = useState(new Tournament({}));

    useEffect(() => {
        tournamentService.getTournament(props.TournamentID, props.EventName)
            .then(tournament => {
                if(tournament instanceof Tournament){
                    setTournament(tournament);
                }
                else{
                    setTournament(new Tournament({}));
                }
            });
    }, []);
    
    const getEventWinner = () => {
        if(tournament.Events && tournament.Events.length > 0){
            return tournament.Events[0].WinnerName;
        }

        return null;
    }

    const getEventDate = () => {
        if(tournament.Events && tournament.Events.length > 0){
            return tournament.Events[0].Date.toLocaleDateString();
        }

        return null;
    }

    return (
        <div>
            <h2>{tournament.Name} - {props.EventName}</h2>

            <div>
                Winner: {getEventWinner()}
            </div>
            <div>
                Date: {getEventDate()}
            </div>
        </div>
    );
}

export interface TournamentDetailsProps extends RouteComponentProps<RouteParams>, Props<RouteParams> {}
export default TournamentDetailsComponent;