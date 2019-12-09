import React from 'react';
import { render } from '@testing-library/react';
import NotFoundPage from '../../../components/pages/NotFoundPage';

describe('NotFoundPage Component', () => {
    it('renders without crashing', async () => {
        const { container } = render(<NotFoundPage />);

        expect(container).toBeDefined();
    });

    it('renders as expected', () => {
        const { container } = render(<NotFoundPage />);

        expect(container).toMatchInlineSnapshot(`
            <div>
              <div>
                404 Page Not Found
              </div>
            </div>
        `);
    });
});
