import axios from 'axios';
import tournamentService from '../../../services/ifpa/tournaments';
import { tournamentListData, tournamentData } from '../../helpers/mockData';
import TournamentList from '../../../models/ifpa/TournamentList';
import Tournament from '../../../models/ifpa/Tournament';

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
                tournament: tournamentListData[0].tournament,
                total_results: tournamentListData[0].total_results
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
                tournament: tournamentListData[0].tournament,
                total_results: tournamentListData[0].total_results
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

    it('returns a valid tournament list object even when the total_results is missing', async () => {
        mockedAxios.get.mockImplementationOnce(() => {
            return Promise.resolve({ data: {
                tournament: tournamentListData[0].tournament
            } });
        });

        const tournamentList = await tournamentService.getTournaments(0, 10);
        expect(tournamentList).not.toBeNull();

        if(tournamentList instanceof TournamentList){
            expect(tournamentList.Tournaments).toBeDefined();
            expect(Array.isArray(tournamentList.Tournaments)).toBe(true);
            expect(tournamentList.Tournaments.length).toBe(1);
            expect(tournamentList.TotalCount).not.toBeDefined();
        }
    });

    it('returns a valid tournament list object even when the tournaments are missing', async () => {
        mockedAxios.get.mockImplementationOnce(() => {
            return Promise.resolve({ data: {
                total_results: tournamentListData[0].total_results
            } });
        });

        const tournamentList = await tournamentService.getTournaments(0, 10);
        expect(tournamentList).not.toBeNull();

        if(tournamentList instanceof TournamentList){
            expect(tournamentList.Tournaments).toBeDefined();
            expect(Array.isArray(tournamentList.Tournaments)).toBe(true);
            expect(tournamentList.Tournaments.length).toBe(0);
            expect(tournamentList.TotalCount).toBeDefined();
        }
    });
});

describe('Tournament service - getTournament Method', () => {
    it('returns null when there is no tournament data', async () => {
        mockedAxios.get.mockImplementationOnce(() => {
            return Promise.resolve({ data: {} });
        });

        const tournament = await tournamentService.getTournament(1, 'test event name');
        expect(tournament).toBeNull();
    });

    it('returns a tournament object when there is tournament data', async () => {
        mockedAxios.get.mockImplementationOnce(() => {
            return Promise.resolve({ data: {
                tournament: tournamentData[0]
            } });
        });

        const tournament = await tournamentService.getTournament(1, 'test event name');
        expect(tournament).toBeDefined();

        if(tournament instanceof Tournament){
            expect(tournament.Events).toBeDefined();
            expect(Array.isArray(tournament.Events)).toBe(true);
            expect(tournament.Events.length).toBe(1);
            expect(tournament.Location).toBeDefined();
        }
    });

    it('returns a valid tournament object when there is tournament data', async () => {
        mockedAxios.get.mockImplementationOnce(() => {
            return Promise.resolve({ data: {
                tournament: tournamentData[0]
            } });
        });

        const tournament = await tournamentService.getTournament(1, 'test event name');

        if(tournament instanceof Tournament){
            expect(tournament.ID).toBe(1);
            expect(tournament.Name).toBe('Test Tournament');
            expect(tournament.ContactName).toBe('Test Contact');
            expect(tournament.Website).toBe('https://www.pinstats.com/');
            expect(tournament.Location).toBeDefined();
            expect(tournament.Location.City).toBe('Columbus');
            expect(tournament.Location.State).toBe('OH');
            expect(tournament.Location.CountryName).toBe('United States');
            expect(tournament.Events).toBeDefined();
            expect(tournament.Events[0].WinnerID).toBe(2);
            expect(tournament.Events[0].WinnerName).toBe('FirstName LastName');
            expect(tournament.Events[0].Name).toBe('test event name');
            expect(tournament.Events[0].Date).toStrictEqual(new Date(2019, 11, 6));
        }
    });

    it('returns a valid tournament object even when the tournament is missing event data', async () => {
        mockedAxios.get.mockImplementationOnce(() => {
            return Promise.resolve({ data: {
                tournament: tournamentData[1]
            } });
        });

        const tournament = await tournamentService.getTournament(1, 'test event name');
        expect(tournament).toBeDefined();

        if(tournament instanceof Tournament){
            expect(tournament.Events).toBeDefined();
            expect(Array.isArray(tournament.Events)).toBe(true);
            expect(tournament.Events.length).toBe(0);
        }
    });
});