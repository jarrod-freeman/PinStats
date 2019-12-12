import axios from 'axios';
import Tournament from '../../models/ifpa/Tournament';
import TournamentList from '../../models/ifpa/TournamentList';
import Event from '../../models/ifpa/Event';
import Location from '../../models/ifpa/Location';

const baseUrl = 'https://api.ifpapinball.com/v1/tournament';

const getTournaments = async (startPos: number, count: number) => {
    let results: TournamentList | null = null;
    const response = await axios.get(`${baseUrl}/list?api_key=${process.env.REACT_APP_API_KEY}&start_pos=${startPos}&count=${count}`);

    if(response && response.data && (response.data.tournament || response.data.total_results)){
        results = new TournamentList();

        if(response.data.tournament){
            const tournaments = response.data.tournament.map((x: any) => {
                return new Tournament({
                    ID: parseInt(x.tournament_id, 10),
                    Name: x.tournament_name,
                    Location: new Location({
                        CountryCode: x.country_code,
                        CountryName: x.country_name,
                    }),
                    Events: new Array<Event>(new Event({
                        Name: x.event_name,
                        Date: new Date(x.event_date),
                        WinnerID: parseInt(x.winner_player_id, 10),
                        WinnerName: x.winner_name,
                    })),
                    PlayerCount: parseInt(x.player_count, 10)
                });
            });

            results.Tournaments = tournaments;
        }

        if(response.data.total_results){
            results.TotalCount = parseInt(response.data.total_results, 10);
        }
    }

    return results;
};

const getTournament = async (tournamentID: number, eventName: string) => {
    let tournament: Tournament | null = null;
    const response = await axios.get(`${baseUrl}/${tournamentID}?api_key=${process.env.REACT_APP_API_KEY}`);

    if(response && response.data && response.data.tournament){
        tournament = new Tournament({
            ID: parseInt(response.data.tournament.tournament_id, 10),
            Name: response.data.tournament.tournament_name,
            Website: response.data.tournament.website,
            ContactName: response.data.tournament.contact_name,
            Location: new Location({
                City: response.data.tournament.city,
                State: response.data.tournament.state,
                CountryName: response.data.tournament.country_name,
            })
        });

        if(response.data.tournament.events){
            tournament.Events = response.data.tournament.events.map((event: any) => {
                //Events is an array, but it appears that there is only ever a single event per tournament.
                //Despite what the documentation says, the event_name is not returned via this api method. Instead
                //we'll just pass it from the previous page where the API does return it when listing tournaments.
                return new Event({
                    ID: parseInt(response.data.tournament.tournament_id, 10),
                    Date: new Date(event.event_date),
                    Name: eventName, //The API doesn't return the event name (like it should...) so we have to pass it into this function.
                    WinnerID: parseInt(event.winner_player_id, 10),
                    WinnerName: event.winner_first_name + ' ' + event.winner_last_name
                });
            });
        }
    }

    return tournament;
};

export default { getTournaments, getTournament };