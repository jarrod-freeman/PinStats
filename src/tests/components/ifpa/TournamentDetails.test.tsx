import React from 'react';
import { render } from '@testing-library/react';
import TournamentDetails from '../../../components/ifpa/TournamentDetails';
import Tournament from '../../../models/ifpa/Tournament';
import Event from '../../../models/ifpa/Event';

describe('TournamentDetails Component', () => {
    it('renders without crashing', async () => {
        const { container } = render(<TournamentDetails tournament={new Tournament()} />);

        expect(container).toBeDefined();
    });

    it('does not display event info when the tournament does not have any events', async () => {
        const tournament = new Tournament({
            Name: 'Test Tournament'
        });
        const { container } = render(<TournamentDetails tournament={tournament} />);

        expect(container).toBeDefined();

        const heading = container.querySelector('h3');
        const winner = container.querySelector('#tournamentWinner');
        const date = container.querySelector('#tournamentDate');

        expect(heading).toBeInstanceOf(Element);
        if(heading instanceof Element){
            expect(heading.textContent).toBe('Test Tournament');
        }

        expect(winner).toBeInstanceOf(Element);
        if(winner instanceof Element){
            expect(winner.textContent).toBe('');
        }

        expect(date).toBeInstanceOf(Element);
        if(date instanceof Element){
            expect(date.textContent).toBe('');
        }
    });

    it('displays event info when the tournament has an event', async () => {
        const tournament = new Tournament({
            Name: 'Test Tournament',
            Events: [new Event({
                ID: 1,
                Name: 'Test Event',
                WinnerID: 2,
                WinnerName: 'Test Winner',
                Date: new Date('2014-08-22')
            })],
        });
        const { container } = render(<TournamentDetails tournament={tournament} />);

        expect(container).toBeDefined();

        const heading = container.querySelector('h3');
        const winner = container.querySelector('#tournamentWinner');
        const date = container.querySelector('#tournamentDate');

        expect(heading).toBeInstanceOf(Element);
        if(heading instanceof Element){
            expect(heading.textContent).toBe('Test Tournament - Test Event');
        }

        expect(winner).toBeInstanceOf(Element);
        if(winner instanceof Element){
            expect(winner.textContent).toBe('Test Winner');
        }

        expect(date).toBeInstanceOf(Element);
        if(date instanceof Element){
            expect(date.textContent).toBe('8/22/2014');
        }
    });

    it('renders when the tournament event is missng a date', async () => {
        const tournament = new Tournament({
            Name: 'Test Tournament',
            Events: [new Event({
                ID: 1,
                Name: 'Test Event',
                WinnerID: 2,
                WinnerName: 'Test Winner'
            })],
        });
        const { container } = render(<TournamentDetails tournament={tournament} />);

        expect(container).toBeDefined();

        const date = container.querySelector('#tournamentDate');

        expect(date).toBeInstanceOf(Element);
        if(date instanceof Element){
            expect(date.textContent).toBe('');
        }
    });
});