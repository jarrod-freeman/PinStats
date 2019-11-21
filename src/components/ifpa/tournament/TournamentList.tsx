import React, { FunctionComponent, Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Tournament from '../../../models/ifpa/Tournament';
import Location from '../../../models/ifpa/Location';
import Event from '../../../models/ifpa/Event';
import {Link} from 'react-router-dom';
import  '../../../css/TournamentList.css';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

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

    return (
            <div>
                <h2>Tournaments</h2>
                <div className="tournaments">
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Tournament Name</TableCell>
                                <TableCell>Event name</TableCell>
                                <TableCell>Event Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tournamentList.map((e: Tournament, i: number) => {
                                    return(
                                        <Fragment key={i}>
                                            <TableRow>
                                                <TableCell><Link to={"/Tournament/" + e.ID + "/" + e.Events[0].Name} >{e.ID}</Link></TableCell>
                                                <TableCell>{e.Name}</TableCell>
                                                <TableCell>{e.Events[0].Name}</TableCell>
                                                <TableCell>{e.Events[0].Date.toDateString()}</TableCell>
                                            </TableRow>
                                        </Fragment>
                                    )
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>
        );
}

export default TournamentList;