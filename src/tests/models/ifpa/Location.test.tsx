import Location from '../../../models/ifpa/Location';

describe('Location Model', () => {
    it('can be initialized without args', () => {
        const location = new Location();

        expect(location).toBeDefined();
        expect(Object.keys(location).length).toBe(4);

        //none of the model properties should be defined
        expect(location.City).not.toBeDefined();
        expect(location.State).not.toBeDefined();
        expect(location.CountryCode).not.toBeDefined();
        expect(location.CountryName).not.toBeDefined();
    });

    it('can be initialized with args', () => {
        const location = new Location({
            City: 'Columbus',
            State: 'OH',
            CountryCode: 'Test Country Code',
            CountryName: 'USA'
        });

        expect(location).toBeDefined();
        expect(Object.keys(location).length).toBe(4);

        expect(location.City).toBe('Columbus');
        expect(location.State).toBe('OH');
        expect(location.CountryCode).toBe('Test Country Code');
        expect(location.CountryName).toBe('USA');
    });
});