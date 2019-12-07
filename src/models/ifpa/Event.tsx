export default class Event{
    private date: Date;

    ID: number;
    Name: string;
    WinnerID: number;
    WinnerName: string;

    get Date(): Date{
        return this.date;
    }
    set Date(value: Date) {
        this.date = new Date(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate());
    }

    constructor(args?: Partial<Event>){
        if(args !== undefined){
            Object.assign(this, args);
        }
    }
}