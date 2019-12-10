import axios from 'axios';
import calendarService from '../../../services/ifpa/calendar';
import { calendarEventsData } from '../../helpers/mockData';

const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock('axios');

describe('Calendar service - search Method', () => {
    it('returns null when there is no calendar data', async () => {
        mockedAxios.get.mockImplementationOnce(() => {
            return Promise.resolve({ data: {} });
        });

        const events = await calendarService.search('test', 10);
        expect(events).toBeNull();
    });

    it('returns an array of one calendar event when there is only one event', async () => {
        mockedAxios.get.mockImplementationOnce(() => {
            return Promise.resolve({ data: {
                calendar: [ calendarEventsData[0] ]
            } });
        });

        const events = await calendarService.search('test', 10);

        expect(events).not.toBeNull();
        expect(Array.isArray(events)).toBe(true);

        if(Array.isArray(events)){
            expect(events.length).toBe(1);
        }
    });

    it('returns an array of many calendar events when there are many events', async () => {
        mockedAxios.get.mockImplementationOnce(() => {
            return Promise.resolve({ data: {
                calendar: calendarEventsData
            } });
        });

        const events = await calendarService.search('test', 10);

        expect(events).not.toBeNull();
        expect(Array.isArray(events)).toBe(true);

        if(Array.isArray(events)){
            expect(events.length).toBe(3);
        }
    });

    it('returns valid calendar event data', async () => {
        mockedAxios.get.mockImplementationOnce(() => {
            return Promise.resolve({ data: {
                calendar: [ calendarEventsData[0] ]
            } });
        });

        const events = await calendarService.search('test', 10);

        if(events){
            expect(events[0].ID).toBe(6981);
            expect(events[0].TournamentID).toBe(6616);
            expect(events[0].TournamentName).toBe('Stockholm Pinball');
            expect(events[0].Address1).toBe('123 Main St');
            expect(events[0].Address2).toBe('');
            expect(events[0].City).toBe('Stockholm');
            expect(events[0].State).toBe('');
            expect(events[0].ZipCode).toBe('12632');
            expect(events[0].Country).toBe('Sweden');
            expect(events[0].Website).toBe('http://stockholmpinball.com/');
            expect(events[0].DirectorName).toBe('Some person');
            expect(events[0].Lat).toBe(59.3022);
            expect(events[0].Long).toBe(18.0149);
            expect(events[0].Details).toBe('System varies, but typically set-the-highscore qualifications and then top-8');
            expect(events[0].PrivateFlag).toBe(false);
            expect(events[0].Distance).toBe(155);
            expect(events[0].StartDate).toStrictEqual(new Date(2020, 9, 17)); //Month is zero-based
            expect(events[0].EndDate).toStrictEqual(new Date(2020, 9, 17)); //Month is zero-based
            expect(events[0].AveragePlayers).toBe(16);
            expect(events[0].AveragePoints).toBe(5);
        }
    });
});