import Location from './Location';
import PlayerStats from './PlayerStats';

export default class Player{
    ID: number;
    FirstName: string;
    LastName: string;
    Location: Location;
    Inititials: string;
    Age: number;
    ExcludedFlag: boolean;
    IFPA_Registered: boolean;
    Stats: PlayerStats;

    constructor(args?: Partial<Player>){
        Object.assign(this, args);
    }
}