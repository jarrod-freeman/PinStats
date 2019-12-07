import CalendarEvent from '../../../models/ifpa/CalendarEvent';

describe('CalendarEvent Model', () => {
    it('can be initialized without args', () => {
        const event = new CalendarEvent();

        expect(event).toBeDefined();
        expect(Object.keys(event).length).toBe(20);

        //none of the model properties should be defined
        expect(event.ID).not.toBeDefined();
        expect(event.TournamentID).not.toBeDefined();
        expect(event.TournamentName).not.toBeDefined();
        expect(event.Address1).not.toBeDefined();
        expect(event.Address2).not.toBeDefined();
        expect(event.City).not.toBeDefined();
        expect(event.State).not.toBeDefined();
        expect(event.ZipCode).not.toBeDefined();
        expect(event.Country).not.toBeDefined();
        expect(event.Website).not.toBeDefined();
        expect(event.EuroChampFlag).not.toBeDefined();
        expect(event.PapaCircuitFlag).not.toBeDefined();
        expect(event.DirectorName).not.toBeDefined();
        expect(event.Lat).not.toBeDefined();
        expect(event.Long).not.toBeDefined();
        expect(event.Details).not.toBeDefined();
        expect(event.PrivateFlag).not.toBeDefined();
        expect(event.Distance).not.toBeDefined();
        expect(event.StartDate).not.toBeDefined();
        expect(event.EndDate).not.toBeDefined();
    });

    it('can be initialized with args', () => {
        const event = new CalendarEvent({
            ID: 1,
            TournamentID: 2,
            TournamentName: 'Test Tournament',
            Address1: '123 Fake St',
            Address2: 'Apt. 1',
            City: 'Columbus',
            State: 'OH',
            ZipCode: '11111',
            Country: 'USA',
            Website: 'http://www.pinstats.com',
            EuroChampFlag: false,
            PapaCircuitFlag: true,
            DirectorName: 'Test Director',
            Lat: 59.3022,
            Long: 18.0149,
            Details: 'Test Details',
            PrivateFlag: true,
            Distance: 5,
            StartDate: new Date('2014-08-22'),
            EndDate: new Date('2014-08-23')
        });

        expect(event).toBeDefined();
        expect(Object.keys(event).length).toBe(20);

        expect(event.ID).toBe(1);
        expect(event.TournamentID).toBe(2);
        expect(event.TournamentName).toBe('Test Tournament');
        expect(event.Address1).toBe('123 Fake St');
        expect(event.Address2).toBe('Apt. 1');
        expect(event.City).toBe('Columbus');
        expect(event.State).toBe('OH');
        expect(event.ZipCode).toBe('11111');
        expect(event.Country).toBe('USA');
        expect(event.Website).toBe('http://www.pinstats.com');
        expect(event.EuroChampFlag).toBe(false);
        expect(event.PapaCircuitFlag).toBe(true);
        expect(event.DirectorName).toBe('Test Director');
        expect(event.Lat).toBe(59.3022);
        expect(event.Long).toBe(18.0149);
        expect(event.Details).toBe('Test Details');
        expect(event.PrivateFlag).toBe(true);
        expect(event.Distance).toBe(5);
        expect(event.StartDate).toStrictEqual(new Date(2014, 7, 22)); //Month is zero-based
        expect(event.EndDate).toStrictEqual(new Date(2014, 7, 23)); //Month is zero-based
    });
});