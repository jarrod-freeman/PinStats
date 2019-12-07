export default class PlayerStats{
    private highestRankDate: Date;

    CurrentRank: number;
    LastMonthRank: number;
    LastYearRank: number;
    HighestRank: number;
    BestFinish: number;
    AverageFinish: number;
    TotalEventsAllTime: number;
    TotalEventsActive: number;
    TotalEventsAway: number;
    RatingsRank: number;

    get HighestRankDate(): Date {
        return this.highestRankDate;
    }
    set HighestRankDate(value: Date) {
        this.highestRankDate = new Date(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate());
    }

    constructor(args?: Partial<PlayerStats>){
        if(args !== undefined){
            Object.assign(this, args);
        }
    }
}