import axios from 'axios';
import tournamentService from '../../../services/ifpa/tournaments';
import { tournamentsData } from '../../helpers/mockData';
import TournamentList from '../../../models/ifpa/TournamentList';

const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock('axios');

describe('Tournament service - getTournaments Method', () => {
    it('returns null when there is no tournament data', async () => {
        mockedAxios.get.mockImplementationOnce(() => {
            return Promise.resolve({ data: {} });
        });

        const tournamentList = await tournamentService.getTournaments(0, 10);
        expect(tournamentList).toBeNull();
    });

    it('returns a tournament list object when there is tournament data', async () => {
        mockedAxios.get.mockImplementationOnce(() => {
            return Promise.resolve({ data: {
                tournament: tournamentsData[0].tournament,
                total_results: tournamentsData[0].total_results
            } });
        });

        const tournamentList = await tournamentService.getTournaments(0, 10);
        expect(tournamentList).not.toBeNull();

        if(tournamentList instanceof TournamentList){
            expect(tournamentList.TotalCount).not.toBeUndefined();
            expect(tournamentList.Tournaments).not.toBeUndefined();
            expect(Array.isArray(tournamentList.Tournaments)).toBe(true);
            expect(tournamentList.Tournaments.length).toBe(1);
        }
    });

    it('returns a valid tournament list object', async () => {
        mockedAxios.get.mockImplementationOnce(() => {
            return Promise.resolve({ data: {
                tournament: tournamentsData[0].tournament,
                total_results: tournamentsData[0].total_results
            } });
        });

        const tournamentList = await tournamentService.getTournaments(0, 10);
        expect(tournamentList).not.toBeNull();

        if(tournamentList instanceof TournamentList){
            expect(tournamentList.TotalCount).toBe(100);
            expect(tournamentList.Tournaments[0].ID).toBe(1);
            expect(tournamentList.Tournaments[0].Name).toBe('Test Tournament');
            expect(tournamentList.Tournaments[0].Location).toBeDefined();
            expect(tournamentList.Tournaments[0].Location.CountryCode).toBe('US');
            expect(tournamentList.Tournaments[0].Location.CountryName).toBe('United States');
            expect(tournamentList.Tournaments[0].Events).toBeDefined();
            expect(Array.isArray(tournamentList.Tournaments[0].Events)).toBe(true);
            expect(tournamentList.Tournaments[0].Events.length).toBe(1);
            expect(tournamentList.Tournaments[0].Events[0].WinnerID).toBe(2);
            expect(tournamentList.Tournaments[0].Events[0].WinnerName).toBe('Test Winner');
            expect(tournamentList.Tournaments[0].Events[0].Date).toStrictEqual(new Date(2019, 11, 6));
            expect(tournamentList.Tournaments[0].Events[0].Name).toBe('Main Tournament');
            expect(tournamentList.Tournaments[0].PlayerCount).toBe(3);
        }
    });
});