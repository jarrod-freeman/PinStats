import React, {Component, Props} from 'react';
import {RouteComponentProps} from 'react-router-dom'
import Tournament from '../../../models/ifpa/Tournament';
import Location from '../../../models/ifpa/Location';
import Event from '../../../models/ifpa/Event';
import  '../../../css/TournamentList.css'

type RouteParams = {
      TournamentID: string,
      EventName: string
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
        fetch(`https://api.ifpapinball.com/v1/tournament/${this.props.TournamentID}?api_key=${process.env.REACT_APP_API_KEY}`)
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
                    tournament.Events = data.tournament.events.map((event: any) => {
                        //Events is an array, but it appears that there is only ever a single event per tournament.
                        //Despite what the documentation says, the event_name is not returned via this api method. Instead
                        //we'll just pass it from the previous page where the API does return it when listing tournaments.
                        return new Event({
                            ID: +data.tournament.tournament_id,
                            Date: new Date(event.event_date),
                            Name: this.props.EventName,
                            WinnerID: +event.winner_player_id,
                            WinnerName: event.winner_first_name + ' ' + event.winner_last_name
                        });
                    });
                }

                this.setState({tournament: tournament});
            }
        });
    }
    
    public getEventWinner(){
        if(this.state.tournament.Events && this.state.tournament.Events.length > 0){
            return this.state.tournament.Events[0].WinnerName;
        }

        return null;
    }

    public getEventDate(){
        if(this.state.tournament.Events && this.state.tournament.Events.length > 0){
            return this.state.tournament.Events[0].Date.toLocaleDateString();
        }

        return null;
    }

    public render(){
        return (
            <div>
                <h2>{this.state.tournament.Name} - {this.props.EventName}</h2>

                <div>
                    Winner: {this.getEventWinner()}
                </div>
                <div>
                    Date: {this.getEventDate()}
                </div>
            </div>
        );
    }
}

export interface TournamentDetailsProps extends RouteComponentProps<RouteParams>, Props<RouteParams> {}
export default TournamentDetailsComponent;