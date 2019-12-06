import React from 'react';
import { HashRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import NavMenu from '../../../components/common/NavMenu';

describe('NavMenu Component', () => {
    it('renders as expected', () => {
        const { container } = render(
            <HashRouter>
                <NavMenu />
            </HashRouter>
        );

        expect(container).toMatchInlineSnapshot(`
            <div>
              <header
                class="MuiPaper-root MuiPaper-elevation4 MuiAppBar-root MuiAppBar-positionRelative navBar MuiAppBar-colorPrimary"
              >
                <div
                  class="menu"
                >
                  <div>
                    <a
                      aria-current="page"
                      class="active"
                      href="#/"
                    >
                      Home
                    </a>
                  </div>
                  <div>
                    <a
                      href="#/tournaments"
                    >
                      Tournaments
                    </a>
                  </div>
                  <div>
                    <a
                      href="#/players"
                    >
                      Player Search
                    </a>
                  </div>
                  <div>
                    <a
                      href="#/versus"
                    >
                      Head to Head
                    </a>
                  </div>
                  <div>
                    <a
                      href="#/find-tournament"
                    >
                      Find Tournament
                    </a>
                  </div>
                </div>
              </header>
            </div>
        `);
    });
});
