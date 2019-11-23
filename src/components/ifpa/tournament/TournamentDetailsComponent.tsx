import React, {Component, Props} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import Tournament from '../../../models/ifpa/Tournament';
import  '../../../css/TournamentList.css';
import tournamentService from '../../../services/tournaments';

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
        tournamentService.getTournament(this.props.TournamentID, this.props.EventName)
            .then(tournament => {
                if(tournament instanceof Tournament){
                    this.setState({tournament: tournament});
                }
                else{
                    this.setState({tournament: new Tournament({})});
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