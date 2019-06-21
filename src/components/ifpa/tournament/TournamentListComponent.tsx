import React, {Component, Fragment, MouseEvent} from 'react';
import { History } from 'history';
import Tournament from '../../../models/ifpa/Tournament';
import Location from '../../../models/ifpa/Location';
import Event from '../../../models/ifpa/Event';
import  '../../../css/TournamentList.css'

type MyProps = { history: History };
type MyState = { tournamentList: Array<Tournament> };

class TournamentListComponent extends Component<MyProps, MyState>{
    constructor(props: MyProps){
        super(props);

        this.state = {
            tournamentList: new Array<Tournament>()
        }
    }

    public componentDidMount(){
        fetch('https://api.ifpapinball.com/v1/tournament/list?api_key=&start_pos=0&count=50')
        .then(response => {
            return response.json();
        })
        .then(data => {
            if(data && data.tournament){
                var tournaments = data.tournament.map((x: any) => {
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
                
                this.setState({tournamentList: tournaments});
            }
        });
    }

    private navigate(event: MouseEvent, tournamentID: number){
        this.props.history.push('/tournament/' + tournamentID);
    }

    public render(){
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
                        {this.state.tournamentList.map((e: Tournament, i: number) => {
                                return(
                                    <Fragment key={i}>
                                        <tr onClick={(event: MouseEvent) => this.navigate(event, e.ID) }>
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
}

export default TournamentListComponent;