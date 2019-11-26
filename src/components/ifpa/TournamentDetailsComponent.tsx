import React, { FunctionComponent, Props, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Tournament from '../../models/ifpa/Tournament';
import  '../../css/TournamentList.css';
import tournamentService from '../../services/tournaments';

interface RouteParams {
    TournamentID: string,
    EventName: string
}

const TournamentDetailsComponent: FunctionComponent<any> = (props: RouteParams) => {
    const [tournament, setTournament] = useState(new Tournament({}));

    useEffect(() => {
        let isSubscribed = true;

        tournamentService.getTournament(props.TournamentID, props.EventName)
            .then(tournament => {
                if(isSubscribed){
                    if(tournament instanceof Tournament){
                        setTournament(tournament);
                    }
                    else{
                        setTournament(new Tournament({}));
                    }
                }
            });

        return () => {
            isSubscribed = false;
        };
    }, [props.TournamentID, props.EventName]);

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
        <div>
            <h3>{tournament.Name} - {props.EventName}</h3>

            <div>
                Winner: {getEventWinner()}
            </div>
            <div>
                Date: {getEventDate()}
            </div>
        </div>
    );
};

export interface TournamentDetailsProps extends RouteComponentProps<RouteParams>, Props<RouteParams> {}
export default TournamentDetailsComponent;