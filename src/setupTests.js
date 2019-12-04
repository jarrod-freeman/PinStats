
jest.mock('react-router-dom', () => ({
    useHistory: () => ({
        push: jest.fn(),
        listen: jest.fn().mockImplementation(() => jest.fn())
    }),
}));

class SVGPathElement extends HTMLElement {}
window.SVGPathElement = SVGPathElement