import TournamentList from '../../../models/ifpa/TournamentList';
import Tournament from '../../../models/ifpa/Tournament';

describe('TournamentList model', () => {
    it('can be initialized without args', () => {
        const tournamentList = new TournamentList();

        expect(tournamentList).toBeDefined();
        expect(Object.keys(tournamentList).length).toBe(2);

        expect(tournamentList.Tournaments).toBeDefined();
        expect(Array.isArray(tournamentList.Tournaments)).toBe(true);
        expect(tournamentList.Tournaments.length).toBe(0);

        //none of the model properties should be defined
        expect(tournamentList.TotalCount).not.toBeDefined();
    });

    it('can be initialized with args', () => {
        const tournamentList = new TournamentList({
            Tournaments: new Array<Tournament>(),
            TotalCount: 1
        });

        expect(tournamentList).toBeDefined();
        expect(Object.keys(tournamentList).length).toBe(2);

        expect(tournamentList.Tournaments).toBeDefined();
        expect(Array.isArray(tournamentList.Tournaments)).toBe(true);
        expect(tournamentList.Tournaments.length).toBe(0);

        expect(tournamentList.TotalCount).toBe(1);
    });
});