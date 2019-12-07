import Player, { PlayerMetadata } from '../../../models/ifpa/Player';
import Location from '../../../models/ifpa/Location';
import PlayerStats from '../../../models/ifpa/PlayerStats';

describe('PlayerMetadata Model', () => {
    it('can be initialized without args', () => {
        const metaData = new PlayerMetadata();

        expect(metaData).toBeDefined();
        expect(Object.keys(metaData).length).toBe(3);

        //none of the model properties should be defined
        expect(metaData.ID).not.toBeDefined();
        expect(metaData.FirstName).not.toBeDefined();
        expect(metaData.LastName).not.toBeDefined();
    });

    it('can be initialized with args', () => {
        const metaData = new PlayerMetadata({
            ID: 1,
            FirstName: 'TestFirstName',
            LastName: 'TestLastName'
        });

        expect(metaData).toBeDefined();
        expect(Object.keys(metaData).length).toBe(3);

        expect(metaData.ID).toBe(1);
        expect(metaData.FirstName).toBe('TestFirstName');
        expect(metaData.LastName).toBe('TestLastName');
    });
});

describe('Player Model', () => {
    it('can be initialized without args', () => {
        const player = new Player();

        expect(player).toBeDefined();
        expect(Object.keys(player).length).toBe(9);

        //none of the model properties should be defined
        expect(player.ID).not.toBeDefined();
        expect(player.FirstName).not.toBeDefined();
        expect(player.LastName).not.toBeDefined();
        expect(player.Location).not.toBeDefined();
        expect(player.Inititials).not.toBeDefined();
        expect(player.Age).not.toBeDefined();
        expect(player.ExcludedFlag).not.toBeDefined();
        expect(player.IfpaRegistered).not.toBeDefined();
        expect(player.Stats).not.toBeDefined();
    });

    it('can be initialized with args', () => {
        const player = new Player({
            ID: 1,
            FirstName: 'TestFirstName',
            LastName: 'TestLastName',
            Location: new Location(),
            Inititials: 'TT',
            Age: 21,
            ExcludedFlag: true,
            IfpaRegistered: false,
            Stats: new PlayerStats()
        });

        expect(player).toBeDefined();
        expect(player.Location).toBeDefined();
        expect(player.Stats).toBeDefined();
        expect(Object.keys(player).length).toBe(9);

        expect(player.ID).toBe(1);
        expect(player.FirstName).toBe('TestFirstName');
        expect(player.LastName).toBe('TestLastName');
        expect(player.Inititials).toBe('TT');
        expect(player.Age).toBe(21);
        expect(player.ExcludedFlag).toBe(true);
        expect(player.IfpaRegistered).toBe(false);
    });
});