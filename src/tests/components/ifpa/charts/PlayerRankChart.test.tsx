import React from 'react';
import { render } from '@testing-library/react';
import PlayerRankChart from '../../../../components/ifpa/charts/PlayerRankChart';

describe('PlayerRankChart Component', () => {
    it('renders without crashing', async () => {
        const { container } = render(<PlayerRankChart Player1History={null} Player2History={null} />);

        expect(container).toBeDefined();
    });
});