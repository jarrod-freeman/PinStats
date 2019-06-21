import React, {Component, Fragment, Props} from 'react';
import {RouteComponentProps} from 'react-router-dom'
import Tournament from '../../../models/ifpa/Tournament';
import Location from '../../../models/ifpa/Location';
import Event from '../../../models/ifpa/Event';
import  '../../../css/TournamentList.css'

type RouteParams = {
      ID: string 
  }

type MyState = { tournament: Tournament };

class TournamentDetailsComponent extends Component<RouteParams, MyState>{
    constructor(props: RouteParams){
        super(props);
        
        this.state = {
            tournament: new Tournament({})
        }
    }

    public componentDidMount(){
        fetch('https://api.ifpapinball.com/v1/tournament/' + this.props.ID + '?api_key=')
        .then(response => {
            return response.json();
        })
        .then(data => {
            if(data && data.tournament){
                let tournament = new Tournament({
                    ID: +data.tournament.tournament_id,
                    Name: data.tournament.tournament_name,
                    Website: data.tournament.website,
                    ContactName: data.tournament.contact_name,
                    Location: new Location({
                        City: data.tournament.city,
                        State: data.tournament.state,
                        CountryName: data.tournament.country_name,
                    })
                });

                if(data.tournament.events){
                    tournament.Events = data.tournament.events.map((event: any) =>{
                        return new Event({
                            ID: +event.event_id,
                            Date: new Date(event.event_date),
                            Name: event.event_name,
                            WinnerID: +event.winner_player_id,
                            WinnerName: event.winner_first_name + ' ' + event.winner_last_name
                        });
                    });
                }

                this.setState({tournament: tournament});
            }
        });
    }

    public render(){
        return (
            <div>
                <h2>{this.state.tournament.Name}</h2>

                <div>
                    <h3>Events</h3>
                    <ul>
                        {this.state.tournament.Events.map((e: Event, i: number) => {
                            return(
                                <Fragment key={i}>
                                    <li>{e.Name != undefined ? e.Name : 'Unknown'}</li>
                                </Fragment>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export interface TournamentDetailsProps extends RouteComponentProps<RouteParams>, Props<RouteParams> {}
export default TournamentDetailsComponent;