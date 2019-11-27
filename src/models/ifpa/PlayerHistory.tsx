import { PlayerMetadata } from './Player';

export class Rank {
    Date: Date;
    Rank: number;
    Points: number;

    constructor(args?: Partial<Rank>){
        Object.assign(this, args);
    }
}

export class Rating {
    Date: Date;
    Rating: number;

    constructor(args?: Partial<Rating>){
        Object.assign(this, args);
    }
}

export default class PlayerHistory extends PlayerMetadata {
    RankHistory: Array<Rank>;
    RatingHistory: Array<Rating>;

    constructor(args?: Partial<PlayerHistory>){
        super(args);

        Object.assign(this, args);
    }
}