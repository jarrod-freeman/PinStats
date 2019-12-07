import Tournament from '../../../models/ifpa/Tournament';
import Location from '../../../models/ifpa/Location';
import Event from '../../../models/ifpa/Event';

describe('Tournament model', () => {
    it('can be initialized without args', () => {
        const tournament = new Tournament();

        expect(tournament).toBeDefined();
        expect(Object.keys(tournament).length).toBe(7);

        expect(tournament.Events).toBeDefined();
        expect(Array.isArray(tournament.Events)).toBe(true);
        expect(tournament.Events.length).toBe(0);

        //none of the model properties should be defined
        expect(tournament.ID).not.toBeDefined();
        expect(tournament.Name).not.toBeDefined();
        expect(tournament.Location).not.toBeDefined();
        expect(tournament.Website).not.toBeDefined();
        expect(tournament.PlayerCount).not.toBeDefined();
        expect(tournament.ContactName).not.toBeDefined();
    });

    it('can be initialized with args', () => {
        const tournament = new Tournament({
            ID: 1,
            Name: 'Test Name',
            Location: new Location(),
            Events: new Array<Event>(),
            Website: 'http://www.pinstats.com',
            PlayerCount: 2,
            ContactName: 'Test Contact Name'
        });

        expect(tournament).toBeDefined();
        expect(Object.keys(tournament).length).toBe(7);

        expect(tournament.Events).toBeDefined();
        expect(Array.isArray(tournament.Events)).toBe(true);
        expect(tournament.Events.length).toBe(0);

        expect(tournament.ID).toBe(1);
        expect(tournament.Name).toBe('Test Name');
        expect(tournament.Location).toStrictEqual(new Location());
        expect(tournament.Website).toBe('http://www.pinstats.com');
        expect(tournament.PlayerCount).toBe(2);
        expect(tournament.ContactName).toBe('Test Contact Name');
    });
});