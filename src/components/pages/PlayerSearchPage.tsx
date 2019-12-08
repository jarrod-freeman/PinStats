import React, { FunctionComponent, useState } from 'react';
import Player from '../../models/ifpa/Player';
import PlayerProfile from '../ifpa/PlayerProfile';
import FindPlayer from '../ifpa/FindPlayer';

const PlayerSearchPage: FunctionComponent = () => {
    const [playerProfile, setPlayerProfile] = useState<Player | null>(null);

    const displayPlayerProfile = () => {
        if(!playerProfile){
            return null;
        }

        return (<PlayerProfile player={playerProfile} />);
    };

    return (
        <section>
            <h3>Player Search</h3>
            <FindPlayer setPlayerProfile={setPlayerProfile} />

            {displayPlayerProfile()}
        </section>
    );
};

export default PlayerSearchPage;