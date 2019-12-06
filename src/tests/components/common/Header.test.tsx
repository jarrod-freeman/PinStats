import React from 'react';
import { HashRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Header from '../../../components/common/Header';

describe('Header Component', () => {
    it('renders as expected', () => {
        const { container } = render(
            <HashRouter>
                <Header />
            </HashRouter>
        );

        expect(container).toMatchInlineSnapshot(`
            <div>
              <div
                class="headerWrapper"
              >
                <div
                  class="header"
                >
                  <img
                    alt="logo"
                    class="logo"
                    src="logo.png"
                  />
                  <div
                    class="title"
                  >
                    <a
                      aria-current="page"
                      class="active"
                      href="#/"
                    >
                      Pin Stats
                    </a>
                  </div>
                </div>
              </div>
            </div>
        `);
    });
});
