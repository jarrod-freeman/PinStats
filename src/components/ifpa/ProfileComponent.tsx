import React, {FunctionComponent, ChangeEvent, useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import Player from '../../models/ifpa/Player';
import axios from 'axios';

const ProfileComponent: FunctionComponent = () => {
    const [playerSearchValue, setPlayerSearchValue] = useState('');
    const [playerSearchResults, setPlayerSearchResults] = useState<Player[]>([]);

    useEffect(() => {
        if(playerSearchValue !== ''){
            axios.get(`https://api.ifpapinball.com/v1/player/search?api_key=${process.env.REACT_APP_API_KEY}&q=${playerSearchValue}`)
            .then(response => {
                if(response && response.data && Array.isArray(response.data.search) && response.data.search.length < 100){
                    let players = response.data.search.map((result: any) => {
                        return new Player({
                            ID: result.player_id,
                            FirstName: result.first_name,
                            LastName: result.last_name
                        });
                    });

                    setPlayerSearchResults(players);
                }
                else{
                    setPlayerSearchResults([]);
                }
            })
            .catch(error => {
                //should probably log this eventually
            });
        }
        else{
            setPlayerSearchResults([]);
        }
    }, [playerSearchValue]);

    

    const playerSearchChange = (e:ChangeEvent<HTMLInputElement>) => {
        setPlayerSearchValue(e.target.value);
    }

    return (
        <div>
            <h2>Player Search</h2>
            <Autocomplete
                id="playerSearch"
                getOptionLabel={ (option: Player) => `${option.FirstName} ${option.LastName}` }
                filterOptions={ x => x }
                options={playerSearchResults}
                freeSolo
                renderInput={params => (
                    <TextField {...params} id="playerSearchField" label="Search" variant="outlined" fullWidth onChange={playerSearchChange} />
                )}
                renderOption={(option: Player) => {
                    return(
                        <Grid container>
                            <Grid item>
                                {option.FirstName + ' ' + option.LastName} 
                            </Grid>
                        </Grid>
                    )
                }}
            />
        </div>
    );
}

export default ProfileComponent;