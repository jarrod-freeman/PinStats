import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../../../components/pages/HomePage';

describe('HomePage Component', () => {
    it('renders without crashing', async () => {
        const { container } = render(<HomePage />);

        expect(container).toBeDefined();
    });

    it('renders as expected', () => {
        const { container } = render(<HomePage />);

        expect(container).toMatchInlineSnapshot(`
            <div>
              <h3>
                Welcome to Pin Stats
              </h3>
            </div>
        `);
    });
});
