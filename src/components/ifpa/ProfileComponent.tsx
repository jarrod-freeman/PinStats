import React, { FunctionComponent, useState, useEffect, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import Player from '../../models/ifpa/Player';
import playerService from '../../services/profiles';
import debounce from 'lodash/debounce';

const ProfileComponent: FunctionComponent = () => {
    const [playerSearchValue, setPlayerSearchValue] = useState('');
    const [playerSearchResults, setPlayerSearchResults] = useState<Player[]>([]);

    useEffect(() => {
        let isSubscribed = true;

        if(playerSearchValue !== ''){
            playerService.search(playerSearchValue)
                .then(players => {
                    if(isSubscribed){
                        setPlayerSearchResults(players);
                    }
                });
        }
        else{
            setPlayerSearchResults([]);
        }

        return () => {
            isSubscribed = false;
        };
    }, [playerSearchValue]);

    const playerSearchChange = (value: string) => {
        setPlayerSearchValue(value);
    };

    const debouncePlayerSearchChange = useCallback(debounce(playerSearchChange, 500), []);

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
                    <TextField {...params} id="playerSearchField" label="Search" variant="outlined" fullWidth onChange={e => debouncePlayerSearchChange(e.target.value)} />
                )}
                renderOption={(option: Player) => {
                    return(
                        <Grid container>
                            <Grid item>
                                {option.FirstName + ' ' + option.LastName}
                            </Grid>
                        </Grid>
                    );
                }}
            />
        </div>
    );
};

export default ProfileComponent;