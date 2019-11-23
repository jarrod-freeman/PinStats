import React, { FunctionComponent, useEffect, useState, MouseEvent, ChangeEvent } from 'react';
import axios from 'axios';
import Tournament from '../../../models/ifpa/Tournament';
import Location from '../../../models/ifpa/Location';
import Event from '../../../models/ifpa/Event';
import { Link } from 'react-router-dom';
import  '../../../css/TournamentList.css';
import { Table, TableBody, TableCell, TableHead, TableRow, TableFooter, TablePagination } from '@material-ui/core';
import TablePaginationActions from '../../common/TablePaginationActions';

const TournamentList: FunctionComponent = () => {
    const pageSizes = [10, 20, 50, 100];
    const [tournamentList, setTournamentList] = useState(new Array<Tournament>());
    const [tournamentCount, setTournamentCount] = useState(0);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pageSizes[0]);
    
    useEffect(() => {
        axios.get(`https://api.ifpapinball.com/v1/tournament/list?api_key=${process.env.REACT_APP_API_KEY}&start_pos=${page * rowsPerPage}&count=${rowsPerPage}`)
        .then(response => {
            if(response && response.data){
                if(response.data.tournament){
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
                else{
                    setTournamentList(new Array<Tournament>());
                }
    
                if(response.data.total_results){
                    setTournamentCount(parseInt(response.data.total_results, 10));
                }
            }
        });
    }, [page, rowsPerPage]);

    const handleChangePage = (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

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
                                <TableRow key={i}>
                                    <TableCell><Link to={"/Tournament/" + e.ID + "/" + e.Events[0].Name} >{e.ID}</Link></TableCell>
                                    <TableCell>{e.Name}</TableCell>
                                    <TableCell>{e.Events[0].Name}</TableCell>
                                    <TableCell>{e.Events[0].Date.toDateString()}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={pageSizes}
                                colSpan={4}
                                count={tournamentCount}
                                page={page}
                                rowsPerPage={rowsPerPage}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div>
    );
}

export default TournamentList;