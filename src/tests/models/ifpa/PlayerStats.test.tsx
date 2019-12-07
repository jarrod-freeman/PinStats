import PlayerStats from '../../../models/ifpa/PlayerStats';

describe('PlayerStats Model', () => {
    it('can be initialized without args', () => {
        const stats = new PlayerStats();

        expect(stats).toBeDefined();
        expect(Object.keys(stats).length).toBe(11);

        //none of the model properties should be defined
        expect(stats.CurrentRank).not.toBeDefined();
        expect(stats.LastMonthRank).not.toBeDefined();
        expect(stats.LastYearRank).not.toBeDefined();
        expect(stats.HighestRank).not.toBeDefined();
        expect(stats.HighestRankDate).not.toBeDefined();
        expect(stats.BestFinish).not.toBeDefined();
        expect(stats.AverageFinish).not.toBeDefined();
        expect(stats.TotalEventsAllTime).not.toBeDefined();
        expect(stats.TotalEventsActive).not.toBeDefined();
        expect(stats.TotalEventsAway).not.toBeDefined();
        expect(stats.RatingsRank).not.toBeDefined();
    });

    it('can be initialized with args', () => {
        const stats = new PlayerStats({
            CurrentRank: 1,
            LastMonthRank: 2,
            LastYearRank: 3,
            HighestRank: 4,
            HighestRankDate: new Date('2014-08-22'),
            BestFinish: 5,
            AverageFinish: 6,
            TotalEventsAllTime: 7,
            TotalEventsActive: 8,
            TotalEventsAway: 9,
            RatingsRank: 10
        });

        expect(stats).toBeDefined();
        expect(Object.keys(stats).length).toBe(11);

        expect(stats.CurrentRank).toBe(1);
        expect(stats.LastMonthRank).toBe(2);
        expect(stats.LastYearRank).toBe(3);
        expect(stats.HighestRank).toBe(4);
        expect(stats.HighestRankDate).toStrictEqual(new Date(2014, 7, 22)); //Month is zero-based
        expect(stats.BestFinish).toBe(5);
        expect(stats.AverageFinish).toBe(6);
        expect(stats.TotalEventsAllTime).toBe(7);
        expect(stats.TotalEventsActive).toBe(8);
        expect(stats.TotalEventsAway).toBe(9);
        expect(stats.RatingsRank).toBe(10);
    });
});