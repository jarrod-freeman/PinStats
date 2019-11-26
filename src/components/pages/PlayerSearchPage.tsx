import React, { FunctionComponent, useState, useEffect, useCallback, ChangeEvent } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import Player from '../../models/ifpa/Player';
import playerService from '../../services/ifpa/players';
import debounce from 'lodash/debounce';
import PlayerProfile from '../ifpa/PlayerProfile';

const PlayerSearchPage: FunctionComponent = () => {
    const [playerSearchValue, setPlayerSearchValue] = useState('');
    const [playerSearchResults, setPlayerSearchResults] = useState<Player[]>([]);
    const [playerProfile, setPlayerProfile] = useState<Player | null>(null);

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

    const playerSearchComplete = (player: Player) => {
        //TODO:
        //the player object returned by the search API is incomplete
        //so we need to make another request to get the full player profile
        if(player && player.ID > 0){
            setPlayerProfile(player);
        }
        else{
            setPlayerProfile(null);
        }
    };

    const displayPlayerProfile = () => {
        if(!playerProfile){
            return null;
        }

        return (<PlayerProfile Player={playerProfile} />);
    };

    return (
        <section>
            <h3>Player Search</h3>
            <Autocomplete
                id="playerSearch"
                getOptionLabel={ (option: Player | string) => {
                    if(option instanceof Player){
                        return `${option.FirstName} ${option.LastName}`;
                    }
                    return option;
                }}
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
                onChange={(e: ChangeEvent<object>, newValue: Player) => {
                    playerSearchComplete(newValue);
                }}
            />

            {displayPlayerProfile()}
        </section>
    );
};

export default PlayerSearchPage;