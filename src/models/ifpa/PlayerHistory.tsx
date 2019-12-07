import { PlayerMetadata } from './Player';

export class Rank {
    private date: Date;

    Rank: number;
    Points: number;

    get Date(): Date{
        return this.date;
    }
    set Date(value: Date) {
        this.date = new Date(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate());
    }

    constructor(args?: Partial<Rank>){
        if(args !== undefined){
            Object.assign(this, args);
        }
    }
}

export class Rating {
    private date: Date;

    Rating: number;

    get Date(): Date{
        return this.date;
    }
    set Date(value: Date) {
        this.date = new Date(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate());
    }

    constructor(args?: Partial<Rating>){
        if(args !== undefined){
            Object.assign(this, args);
        }
    }
}

export default class PlayerHistory extends PlayerMetadata {
    RankHistory: Array<Rank>;
    RatingHistory: Array<Rating>;

    constructor(args?: Partial<PlayerHistory>){
        super(args);

        this.RankHistory = new Array<Rank>();
        this.RatingHistory = new Array<Rating>();

        if(args !== undefined){
            Object.assign(this, args);
        }
    }
}