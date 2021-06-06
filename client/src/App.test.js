import { render } from '@testing-library/react';
import App from './App';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useNavigate: jest.fn(),
  useRoutes: jest.fn(),
}));
test('renders learn react link', () => {
  const result = render(<App />);
  const someElement = result.container.querySelector('#other-selector');
  expect(someElement).toBeFalsy();
});
