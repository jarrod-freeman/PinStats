export default class CalendarEvent{
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
    StartDate: Date;
    EndDate: Date;

    constructor(args: Partial<CalendarEvent>){
        Object.assign(this, args);
    }
}