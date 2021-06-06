import { screen } from '@testing-library/react';
import { render } from '../../store/test-store';
import Page from '../../pages/auth/profile';

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return {
    __esModule: true,
    ...originalModule,
    useNavigate: jest.fn(),
    useHref: jest.fn(),
    useLocation: jest.fn().mockReturnValue({ pathname: '/' }),
  };
});
test('renders profile page', () => {
  const component = <Page />;
  render(component, {
    auth: {},
    actions: {},
  });
  const linkElement = screen.getByText(/Profile/i);
  expect(linkElement).toBeInTheDocument();
});
