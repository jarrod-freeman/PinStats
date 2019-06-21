import Location from './Location';
import Event from './Event';

export default class Tournament{
    ID: number;
    Name: string;
    Location: Location;
    Website: string;
    Events: Array<Event>;
    PlayerCount: number;
    ContactName: string;

    constructor(args: Partial<Tournament>){
        this.Events = new Array<Event>();
        
        Object.assign(this, args);
    } 
}