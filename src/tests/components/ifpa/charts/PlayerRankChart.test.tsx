import React from 'react';
import { render } from '@testing-library/react';
import PlayerRankChart from '../../../../components/ifpa/charts/PlayerRankChart';

describe('PlayerRankChart Component', () => {
    test('renders without crashing', async () => {
        const component = render(<PlayerRankChart Player1History={null} Player2History={null} />);

        expect(component.container).toBeDefined();
    });
});