import axios from 'axios';
import Player from '../../models/ifpa/Player';
import Location from '../../models/ifpa/Location';
import PlayerStats from '../../models/ifpa/PlayerStats';
import PlayerHistory, { Rank, Rating } from '../../models/ifpa/PlayerHistory';

const baseUrl = 'https://api.ifpapinball.com/v1/player';

const search = async (searchTerm: string) => {
    let results: Array<Player> | null = null;
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

const getHistory = async (playerID: number) => {
    let history: PlayerHistory | null = null;
    const response = await axios.get(`${baseUrl}/${playerID}/history?api_key=${process.env.REACT_APP_API_KEY}`);

    if(response && response.data){
        let player = response.data.player;
        let rankHistory = response.data.rank_history;
        let ratingHistory = response.data.rank_history;

        history = new PlayerHistory();

        if(player){
            history.ID = player.player_id;
            history.FirstName = player.first_name;
            history.LastName = player.last_name;
        }

        if(rankHistory && Array.isArray(rankHistory)){
            history.RankHistory = rankHistory.map((rank: any) => {
                return new Rank({
                    Date: rank.rank_date,
                    Rank: rank.rank_position,
                    Points: rank.wppr_points
                });
            });
        }

        if(ratingHistory && Array.isArray(ratingHistory)){
            history.RatingHistory = ratingHistory.map((rating: any) => {
                return new Rating({
                    Date: rating.rating_date,
                    Rating: rating.rating
                });
            });
        }
    }

    return history;
};

export default { search, getHistory };