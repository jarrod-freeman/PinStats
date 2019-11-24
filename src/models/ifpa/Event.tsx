export default class Event{
    ID: number;
    Date: Date;
    Name: string;
    WinnerID: number;
    WinnerName: string;

    constructor(args: Partial<Event>){
        Object.assign(this, args);
    }
}