import React, {FunctionComponent, Fragment, MouseEvent, useEffect, useState} from 'react';
import axios from 'axios';
import { History } from 'history';
import Tournament from '../../../models/ifpa/Tournament';
import Location from '../../../models/ifpa/Location';
import Event from '../../../models/ifpa/Event';
import  '../../../css/TournamentList.css'

const TournamentList: FunctionComponent = () => {
    const [tournamentList, setTournamentList] = useState(new Array<Tournament>());
    
    useEffect(() => {
        axios.get(`https://api.ifpapinball.com/v1/tournament/list?api_key=${process.env.REACT_APP_API_KEY}&start_pos=0&count=50`)
        .then(response => {
            if(response && response.data && response.data.tournament){
                var tournaments = response.data.tournament.map((x: any) => {
                   return new Tournament({
                       ID: +x.tournament_id, 
                       Name: x.tournament_name,
                       Location: new Location({
                           CountryCode: x.country_code,
                           CountryName: x.country_name,
                        }),
                       Events: new Array<Event>(new Event({
                           Name: x.event_name,
                           Date: new Date(x.event_date),
                           WinnerID: +x.winner_player_id,
                           WinnerName: x.winner_name,
                       })),
                       PlayerCount: +x.player_count
                    });
                });
                
                setTournamentList(tournaments);
            }
        });
    }, []);

    const navigate = (event: MouseEvent, tournamentID: number) => {
        //history.pushState('/tournament/' + tournamentID, "");
    }

    return (
            <div>
                <h2>Tournaments</h2>
                <table className="tournaments">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Tournament Name</td>
                            <td>Event name</td>
                            <td>Event Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {tournamentList.map((e: Tournament, i: number) => {
                                return(
                                    <Fragment key={i}>
                                        <tr onClick={(event: MouseEvent) => navigate(event, e.ID) }>
                                            <td>{e.ID}</td>
                                            <td>{e.Name}</td>
                                            <td>{e.Events[0].Name}</td>
                                            <td>{e.Events[0].Date.toDateString()}</td>
                                        </tr>
                                    </Fragment>
                                )
                        })}
                    </tbody>
                </table>
            </div>
        );
}

export default TournamentList;