export default class CalendarEvent{
    private startDate: Date;
    private endDate: Date;

    ID: number;
    TournamentID: number;
    TournamentName: string;
    Address1: string;
    Address2: string;
    City: string;
    State: string;
    ZipCode: string;
    Country: string;
    Website: string;
    EuroChampFlag: boolean;
    PapaCircuitFlag: boolean;
    DirectorName: string;
    Lat: number;
    Long: number;
    Details: string;
    PrivateFlag: boolean;
    Distance: number;

    get StartDate(): Date {
        return this.startDate;
    }
    set StartDate(value: Date) {
        this.startDate = new Date(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate());
    }

    get EndDate(): Date {
        return this.endDate;
    }
    set EndDate(value: Date) {
        this.endDate = new Date(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate());
    }

    constructor(args?: Partial<CalendarEvent>){
        if(args !== undefined){
            Object.assign(this, args);
        }
    }
}