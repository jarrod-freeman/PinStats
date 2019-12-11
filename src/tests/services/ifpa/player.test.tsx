import axios from 'axios';
import playerService from '../../../services/ifpa/players';
import { playersData, playerHistoryData } from '../../helpers/mockData';
import PlayerHistory from '../../../models/ifpa/PlayerHistory';

const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock('axios');

describe('Player service - search Method', () => {
    it('returns null when there is no player data', async () => {
        mockedAxios.get.mockImplementationOnce(() => {
            return Promise.resolve({ data: {} });
        });

        const players = await playerService.search('test');

        expect(players).toBeNull();
    });

    it('returns an array of one player when there is only one player', async () => {
        mockedAxios.get.mockImplementationOnce(() => {
            return Promise.resolve({ data: {
                search: [ playersData[0] ]
            } });
        });

        const players = await playerService.search('test');

        expect(players).not.toBeNull();
        expect(Array.isArray(players)).toBe(true);

        if(Array.isArray(players)){
            expect(players.length).toBe(1);
        }
    });

    it('returns an array of many players when there are many players', async () => {
        mockedAxios.get.mockImplementationOnce(() => {
            return Promise.resolve({ data: {
                search: playersData
            } });
        });

        const players = await playerService.search('test');

        expect(players).not.toBeNull();
        expect(Array.isArray(players)).toBe(true);

        if(Array.isArray(players)){
            expect(players.length).toBe(3);
        }
    });

    it('returns valid player data', async () => {
        mockedAxios.get.mockImplementationOnce(() => {
            return Promise.resolve({ data: {
                search: [ playersData[1] ]
            } });
        });

        const players = await playerService.search('test');

        if(players){
            expect(players[0].ID).toBe(3);
            expect(players[0].FirstName).toBe('TestFirst2');
            expect(players[0].LastName).toBe('TestLast2');
            expect(players[0].Location).toBeDefined();
            expect(players[0].Location.CountryName).toBe('United States');
            expect(players[0].Location.CountryCode).toBe('US');
            expect(players[0].Location.City).toBe('Columbus');
            expect(players[0].Location.State).toBe('OH');
            expect(players[0].Stats).toBeDefined();
            expect(players[0].Stats.CurrentRank).toBe(4);
        }
    });
});

describe('Player service - getHistory Method', () => {
    it('returns null when there is no player history data', async () => {
        mockedAxios.get.mockImplementationOnce(() => {
            return Promise.resolve({ data: {} });
        });

        const playerHistory = await playerService.getHistory(1);

        expect(playerHistory).toBeNull();
    });

    it('returns player history when there is player history data', async () => {
        mockedAxios.get.mockImplementationOnce(() => {
            return Promise.resolve({ data: {
                player: playerHistoryData[0].player,
                rank_history: playerHistoryData[0].rank_history,
                rating_history: playerHistoryData[0].rating_history
            } });
        });

        const playerHistory = await playerService.getHistory(1);

        expect(playerHistory).not.toBeNull();
        expect(playerHistory).toBeInstanceOf(PlayerHistory);

        if(playerHistory instanceof PlayerHistory){
            expect(playerHistory.RankHistory).toBeDefined();
            expect(Array.isArray(playerHistory.RankHistory)).toBe(true);
            expect(playerHistory.RankHistory.length).toBe(1);
            expect(playerHistory.RatingHistory).toBeDefined();
            expect(Array.isArray(playerHistory.RatingHistory)).toBe(true);
            expect(playerHistory.RatingHistory.length).toBe(1);
        }
    });

    it('returns player history even if associated history is missing', async () => {
        mockedAxios.get.mockImplementationOnce(() => {
            return Promise.resolve({ data: {
                player: playerHistoryData[0].player
            } });
        });

        const playerHistory = await playerService.getHistory(1);

        expect(playerHistory).not.toBeNull();
        expect(playerHistory).toBeInstanceOf(PlayerHistory);

        if(playerHistory instanceof PlayerHistory){
            expect(playerHistory.RankHistory).toBeDefined();
            expect(Array.isArray(playerHistory.RankHistory)).toBe(true);
            expect(playerHistory.RankHistory.length).toBe(0);
            expect(playerHistory.RatingHistory).toBeDefined();
            expect(Array.isArray(playerHistory.RatingHistory)).toBe(true);
            expect(playerHistory.RatingHistory.length).toBe(0);
        }
    });

    it('returns valid player', async () => {
        mockedAxios.get.mockImplementationOnce(() => {
            return Promise.resolve({ data: {
                player: playerHistoryData[0].player,
                rank_history: playerHistoryData[0].rank_history,
                rating_history: playerHistoryData[0].rating_history
            } });
        });

        const playerHistory = await playerService.getHistory(1);

        if(playerHistory instanceof PlayerHistory){
            expect(playerHistory.ID).toBe(1);
            expect(playerHistory.FirstName).toBe('TestFirst1');
            expect(playerHistory.LastName).toBe('TestLast1');
            expect(playerHistory.RankHistory[0].Date).toStrictEqual(new Date(2019, 11, 1));
            expect(playerHistory.RankHistory[0].Points).toBe(1.2500);
            expect(playerHistory.RankHistory[0].Rank).toBe(14468);
            expect(playerHistory.RatingHistory[0].Date).toStrictEqual(new Date(2018, 8, 18));
            expect(playerHistory.RatingHistory[0].Rating).toBe(1156.1530);
        }
    });
});