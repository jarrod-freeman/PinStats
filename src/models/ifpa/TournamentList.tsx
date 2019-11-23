import Tournament from './Tournament';

export default class TournamentList {
    Tournaments: Array<Tournament>;
    TotalCount: number;

    constructor(){
        this.Tournaments = new Array<Tournament>();
        this.TotalCount = 0;
    } 
};