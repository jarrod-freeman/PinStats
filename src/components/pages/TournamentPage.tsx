import React, { FunctionComponent, useEffect, useState, MouseEvent, ChangeEvent } from 'react';
import Tournament from '../../models/ifpa/Tournament';
import { Link } from 'react-router-dom';
import  '../../css/TournamentList.css';
import { Table, TableBody, TableCell, TableHead, TableRow, TableFooter, TablePagination } from '@material-ui/core';
import TablePaginationActions from '../common/TablePaginationActions';
import tournamentService from '../../services/tournaments';

const TournamentPage: FunctionComponent = () => {
    const pageSizes = [10, 20, 50, 100];
    const [tournamentList, setTournamentList] = useState(new Array<Tournament>());
    const [tournamentCount, setTournamentCount] = useState(0);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pageSizes[0]);

    useEffect(() => {
        let isSubscribed = true;

        tournamentService.getTournaments(page * rowsPerPage, rowsPerPage)
            .then(response => {
                if(isSubscribed){
                    setTournamentList(response.Tournaments);
                    setTournamentCount(response.TotalCount);
                }
            });

        return () => {
            isSubscribed = false;
        };
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
            <h3>Tournaments</h3>
            <div className="tournaments">
                <Table>
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
                                    <TableCell><Link to={'/tournaments/' + e.ID + '/' + e.Events[0].Name} >{e.ID}</Link></TableCell>
                                    <TableCell>{e.Name}</TableCell>
                                    <TableCell>{e.Events[0].Name}</TableCell>
                                    <TableCell>{e.Events[0].Date.toDateString()}</TableCell>
                                </TableRow>
                            );
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
};

export default TournamentPage;