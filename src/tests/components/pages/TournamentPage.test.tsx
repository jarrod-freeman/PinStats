import React from 'react';
import axios from 'axios';
import { render, waitForElement } from '@testing-library/react';
import { tournamentListData, tournamentData } from '../../helpers/mockData';
import TournamentPage from '../../../components/pages/TournamentPage';

const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock('axios');

describe('TournamentPage Component', () => {
    beforeEach(() => {
        mockedAxios.get.mockImplementationOnce((url: string) => {
            if(url.startsWith('https://api.ifpapinball.com/v1/tournament/list')){
                return Promise.resolve({ data: {
                    tournament: tournamentListData[0].tournament,
                    total_results: tournamentListData[0].total_results
                } });
            }
            else if(url.startsWith('https://api.ifpapinball.com/v1/tournament/')){
                return Promise.resolve({ data: {
                    tournament: tournamentData[0]
                } });
            }

            return Promise.resolve({ data: {} });
        });
    });

    it('renders without crashing', async () => {
        const { container } =  render(<TournamentPage />);
        await waitForElement(() => container.querySelector('section'));

        expect(container).toBeDefined();
    });

    it('displays the tournament table by default', async () => {
        const { container } = render(<TournamentPage />);
        await waitForElement(() => container.querySelector('section'));

        const tableWrapper = container.querySelector('.tournaments');
        expect(tableWrapper).toBeDefined();

        expect(tableWrapper).toBeInstanceOf(HTMLDivElement);
        if(tableWrapper instanceof HTMLDivElement){
            expect(tableWrapper.style['display']).toBe('block');
        }
    });

    it('hides the tournament details by default', async () => {
        const { container } = render(<TournamentPage />);
        await waitForElement(() => container.querySelector('section'));

        const tableDetails = container.querySelector('.tournamentDetails');
        expect(tableDetails).toBeDefined();

        expect(tableDetails).toBeInstanceOf(HTMLDivElement);
        if(tableDetails instanceof HTMLDivElement){
            expect(tableDetails.style['display']).toBe('none');
        }
    });
});