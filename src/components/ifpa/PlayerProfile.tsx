import React, { FunctionComponent } from 'react';
import Player from '../../models/ifpa/Player';

interface PlayerProfileParams {
    Player: Player
}

const PlayerProfile: FunctionComponent<PlayerProfileParams> = (props: PlayerProfileParams) => {
    return (
        <div>
            <h3>Player Info</h3>

            {props.Player.FirstName + ' ' + props.Player.LastName}
        </div>
    );
};

export default PlayerProfile;