import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../../../components/common/Footer';

describe('Footer Component', () => {
    it('renders as expected', () => {
        const { container } = render(<Footer />);

        expect(container).toMatchInlineSnapshot(`
            <div>
              <div
                class="footer"
              >
                © 
                2019
              </div>
            </div>
        `);
    });
});
