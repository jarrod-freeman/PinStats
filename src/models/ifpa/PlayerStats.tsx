
export default class PlayerStats{
    CurrentRank: number;
    LastMonthRank: number;
    LastYearRank: number;
    HighestRank: number;
    HighestRankDate: Date;
    BestFinish: number;
    AverageFinish: number;
    TotalEventsAllTime: number;
    TotalEventsActive: number;
    TotalEventsAway: number;
    RatingsRank: number;

    constructor(args: Partial<PlayerStats>){
        Object.assign(this, args);
    }
}