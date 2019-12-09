import React from 'react';
import { render } from '@testing-library/react';
import TournamentDetails from '../../../components/ifpa/TournamentDetails';
import Tournament from '../../../models/ifpa/Tournament';

describe('TournamentDetails Component', () => {
    it('renders without crashing', async () => {
        const { container } = render(<TournamentDetails tournament={new Tournament()} />);

        expect(container).toBeDefined();
    });
});