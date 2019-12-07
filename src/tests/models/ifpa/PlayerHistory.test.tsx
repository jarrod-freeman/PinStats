import PlayerHistory, { Rank, Rating } from '../../../models/ifpa/PlayerHistory';

describe('Rank Model', () => {
    it('can be initialized without args', () => {
        const rank = new Rank();

        expect(rank).toBeDefined();
        expect(Object.keys(rank).length).toBe(3);

        //none of the model properties should be defined
        expect(rank.Date).not.toBeDefined();
        expect(rank.Rank).not.toBeDefined();
        expect(rank.Points).not.toBeDefined();
    });

    it('can be initialized with args', () => {
        const rank = new Rank({
            Date: new Date('2014-08-22'),
            Rank: 1,
            Points: 2.25
        });

        expect(rank).toBeDefined();
        expect(Object.keys(rank).length).toBe(3);

        expect(rank.Date).toStrictEqual(new Date(2014, 7, 22)); //Month is zero-based
        expect(rank.Rank).toBe(1);
        expect(rank.Points).toBe(2.25);
    });
});

describe('Rating Model', () => {
    it('can be initialized without args', () => {
        const rating = new Rating();

        expect(rating).toBeDefined();
        expect(Object.keys(rating).length).toBe(2);

        //none of the model properties should be defined
        expect(rating.Date).not.toBeDefined();
        expect(rating.Rating).not.toBeDefined();
    });

    it('can be initialized with args', () => {
        const rating = new Rating({
            Date: new Date('2014-08-22'),
            Rating: 1
        });

        expect(rating).toBeDefined();
        expect(Object.keys(rating).length).toBe(2);

        expect(rating.Date).toStrictEqual(new Date(2014, 7, 22)); //Month is zero-based
        expect(rating.Rating).toBe(1);
    });
});

describe('PlayerHistory Model', () => {
    it('can be initialized without args', () => {
        const playerHistory = new PlayerHistory();

        expect(playerHistory).toBeDefined();
        expect(Object.keys(playerHistory).length).toBe(5);

        expect(playerHistory.RankHistory).toBeDefined();
        expect(Array.isArray(playerHistory.RankHistory)).toBe(true);
        expect(playerHistory.RankHistory.length).toBe(0);

        expect(playerHistory.RatingHistory).toBeDefined();
        expect(Array.isArray(playerHistory.RatingHistory)).toBe(true);
        expect(playerHistory.RatingHistory.length).toBe(0);

        //none of the model properties should be defined
        expect(playerHistory.ID).not.toBeDefined();
        expect(playerHistory.FirstName).not.toBeDefined();
        expect(playerHistory.LastName).not.toBeDefined();
    });

    it('can be initialized with args', () => {
        const playerHistory = new PlayerHistory({
            ID: 1,
            FirstName: 'TestFirstName',
            LastName: 'TestLastName',
            RankHistory: new Array<Rank>(),
            RatingHistory: new Array<Rating>()
        });

        expect(playerHistory).toBeDefined();
        expect(Object.keys(playerHistory).length).toBe(5);

        expect(playerHistory.RankHistory).toBeDefined();
        expect(Array.isArray(playerHistory.RankHistory)).toBe(true);
        expect(playerHistory.RankHistory.length).toBe(0);

        expect(playerHistory.RatingHistory).toBeDefined();
        expect(Array.isArray(playerHistory.RatingHistory)).toBe(true);
        expect(playerHistory.RatingHistory.length).toBe(0);

        expect(playerHistory.ID).toBe(1);
        expect(playerHistory.FirstName).toBe('TestFirstName');
        expect(playerHistory.LastName).toBe('TestLastName');
    });
});