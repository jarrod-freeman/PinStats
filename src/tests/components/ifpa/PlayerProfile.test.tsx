import React from 'react';
import { render } from '@testing-library/react';
import PlayerProfile from '../../../components/ifpa/PlayerProfile';
import Player from '../../../models/ifpa/Player';
import PlayerStats from '../../../models/ifpa/PlayerStats';

describe('PlayerProfile Component', () => {
    it('renders without crashing', async () => {
        const { container } = render(<PlayerProfile player={new Player()} />);

        expect(container).toBeDefined();
    });

    it('displays player metadata', async () => {
        const player = new Player({
            ID: 1,
            FirstName: 'TestFirstName',
            LastName: 'TestLastName'
        });
        const { container } = render(<PlayerProfile player={player} />);

        const id = container.querySelector('#playerID');
        const name = container.querySelector('#playerName');
        const image = container.querySelector('#playerImage');

        expect(id).toBeInstanceOf(Element);
        if(id instanceof Element){
            expect(id.textContent).toBe('1');
        }

        expect(name).toBeInstanceOf(Element);
        if(name instanceof Element){
            expect(name.textContent).toBe('TestFirstName TestLastName');
        }

        expect(image).toBeInstanceOf(HTMLImageElement);
        if(image instanceof HTMLImageElement){
            expect(image.src).toBe('https://www.ifpapinball.com/images/profiles/players/1.jpg');
        }
    });

    it('displays the player\'s current rank if the player has Stats', async () => {
        const player = new Player({
            Stats: new PlayerStats({
                CurrentRank: 1
            })
        });
        const { container } = render(<PlayerProfile player={player} />);

        const rank = container.querySelector('#playerRank');

        expect(rank).toBeInstanceOf(Element);
        if(rank instanceof Element){
            expect(rank.textContent).toBe('1');
        }
    });

    it('does not display the player\'s current rank if the player does not have Stats', async () => {
        const player = new Player();
        const { container } = render(<PlayerProfile player={player} />);

        const rank = container.querySelector('#playerRank');

        expect(rank).toBeInstanceOf(Element);
        if(rank instanceof Element){
            expect(rank.textContent).toBe('');
        }
    });
});