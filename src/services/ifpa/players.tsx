import axios from 'axios';
import Player from '../../models/ifpa/Player';
import Location from '../../models/ifpa/Location';
import PlayerStats from '../../models/ifpa/PlayerStats';

const baseUrl = 'https://api.ifpapinball.com/v1/player';

const search = async (searchTerm: string) => {
    let results: Array<Player> = new Array<Player>();
    const response = await axios.get(`${baseUrl}/search?api_key=${process.env.REACT_APP_API_KEY}&q=${searchTerm}`);

    if(response && response.data && Array.isArray(response.data.search) && response.data.search.length < 100){
        results = response.data.search.map((result: any) => {
            return new Player({
                ID: result.player_id,
                FirstName: result.first_name,
                LastName: result.last_name,
                Location: new Location({
                    City: result.city,
                    State: result.state,
                    CountryCode: result.country_code,
                    CountryName: result.country_name
                }),
                Stats: new PlayerStats({
                    CurrentRank: result.wppr_rank
                })
            });
        });
    }

    return results;
};

export default { search };