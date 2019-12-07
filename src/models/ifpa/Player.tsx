import Location from './Location';
import PlayerStats from './PlayerStats';

export class PlayerMetadata {
    ID: number;
    FirstName: string;
    LastName: string;

    constructor(args?: Partial<PlayerMetadata>){
        if(args !== undefined){
            Object.assign(this, args);
        }
    }
}

export default class Player extends PlayerMetadata {
    Location: Location;
    Inititials: string;
    Age: number;
    ExcludedFlag: boolean;
    IfpaRegistered: boolean;
    Stats: PlayerStats;

    constructor(args?: Partial<Player>){
        super(args);

        if(args !== undefined){
            Object.assign(this, args);
        }
    }
}