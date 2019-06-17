
export default class Location{
    City: string;
    State: string;
    CountryCode: string;
    CountryName: string;

    constructor(args: Partial<Location>){
        Object.assign(this, args);
    } 
}