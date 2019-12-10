import axios from 'axios';
import CalendarEvent from '../../models/ifpa/CalendarEvent';

const baseUrl = 'https://api.ifpapinball.com/v1/calendar';

const search = async (address: string, radius: number) => {
    let results: Array<CalendarEvent> | null = null;
    const response = await axios.get(`${baseUrl}/search?api_key=${process.env.REACT_APP_API_KEY}&address=${address}&m=${radius}`);

    if(response && response.data && Array.isArray(response.data.calendar) && response.data.calendar.length < 100){
        results = response.data.calendar.map((result: any) => {
            return new CalendarEvent({
                ID: parseInt(result.calendar_id, 10),
                TournamentID: parseInt(result.tournament_id, 10),
                TournamentName: result.tournament_name,
                Address1: result.address1,
                Address2: result.address2,
                City: result.city,
                State: result.state,
                ZipCode: result.zipcode,
                Country: result.country,
                Website: result.website,
                DirectorName: result.director_name,
                Lat: parseFloat(result.latitude),
                Long: parseFloat(result.longitude),
                Details: result.details,
                PrivateFlag: result.private_flag ? result.private_flag.toLowerCase() === 'y' : false,
                Distance: parseInt(result.distance, 10),
                StartDate: new Date(result.start_date),
                EndDate: new Date(result.end_date),
                AveragePlayers: parseInt(result.average_players, 10),
                AveragePoints: parseInt(result.average_points, 10)
            });
        });
    }

    return results;
};

export default { search };