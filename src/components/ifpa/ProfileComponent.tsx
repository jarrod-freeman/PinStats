import React, {FunctionComponent, ChangeEvent, useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import Player from '../../models/ifpa/Player';
import playerService from '../../services/profiles';

const ProfileComponent: FunctionComponent = () => {
    const [playerSearchValue, setPlayerSearchValue] = useState('');
    const [playerSearchResults, setPlayerSearchResults] = useState<Player[]>([]);

    useEffect(() => {
        if(playerSearchValue !== ''){
            playerService.search(playerSearchValue)
                .then(players => {
                    setPlayerSearchResults(players);
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
            <h3>Player Search</h3>
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