import Event from '../../../models/ifpa/Event';

describe('Event model', () => {
    it('can be initialized without args', () => {
        const event = new Event();

        expect(event).toBeDefined();
        expect(Object.keys(event).length).toBe(5);

        //none of the model properties should be defined
        expect(event.ID).not.toBeDefined();
        expect(event.Date).not.toBeDefined();
        expect(event.Name).not.toBeDefined();
        expect(event.WinnerID).not.toBeDefined();
        expect(event.WinnerName).not.toBeDefined();
    });

    it('can be initialized with args', () => {
        const event = new Event({
            ID: 1,
            Date: new Date('2014-08-22'),
            Name: 'Test Event Name',
            WinnerID: 2,
            WinnerName: 'Test Winner Name'
        });

        expect(event).toBeDefined();
        expect(Object.keys(event).length).toBe(5);

        expect(event.ID).toBe(1);
        expect(event.Date).toStrictEqual(new Date(2014, 7, 22)); //Month is zero-based
        expect(event.Name).toBe('Test Event Name');
        expect(event.WinnerID).toBe(2);
        expect(event.WinnerName).toBe('Test Winner Name');
    });
});