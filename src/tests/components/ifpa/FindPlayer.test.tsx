import React from 'react';
import { render } from '@testing-library/react';
import FindPlayer from '../../../components/ifpa/FindPlayer';

describe('FindPlayer Component', () => {
    it('renders without crashing', async () => {
        const { container } = render(<FindPlayer setPlayerProfile={() => {}} />);

        expect(container).toBeDefined();
    });
});