
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: jest.fn(),
        listen: jest.fn().mockImplementation(() => jest.fn())
    }),
}));

class SVGPathElement extends HTMLElement {}
window.SVGPathElement = SVGPathElement