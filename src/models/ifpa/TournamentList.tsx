import Tournament from './Tournament';

export default class TournamentList {
    Tournaments: Array<Tournament>;
    TotalCount: number;

    constructor(args?: Partial<TournamentList>){
        this.Tournaments = new Array<Tournament>();

        if(args !== undefined){
            Object.assign(this, args);
        }
    }
}