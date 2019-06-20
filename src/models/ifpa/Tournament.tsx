
export default class Tournament{
    ID: number;
    CountryCode: string;
    CountryName: string;
    EventDate: Date;
    EventName: string;
    PlayerCount: number;
    Name: string;
    WinnerName: string;
    WinnerID: number;

    constructor(args: Partial<Tournament>){
        Object.assign(this, args);
    } 
}